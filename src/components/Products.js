import React from 'react';
import '../style.css';

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="products">
      {products &&
        products.map((prod) => {
          return (
            <div className="prodlist" key={prod.id}>
              <img className="prodimg" src={prod.thumbnail} alt={prod.title} />
              <div>
                <span>{prod.title}</span> &nbsp;
                <b>$ {prod.price}</b>
                {cart.some((p) => p.id === prod.id) ? (
                  <button
                    className="removefromcartbutton"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: {
                          id: prod.id,
                          title: prod.title,
                          thumbnail: prod.thumbnail,
                          qty: 1,
                          price: prod.price,
                        },
                      })
                    }
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="addtocartbutton"
                    onClick={() =>
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          id: prod.id,
                          title: prod.title,
                          thumbnail: prod.thumbnail,
                          qty: 1,
                          price: prod.price,
                        },
                      })
                    }
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
