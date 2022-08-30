import React, { useState, useEffect } from 'react';

const Cart = ({ state, dispatch }) => {
  const { products, cart } = state;
  const [total, setTotal] = useState(0);
  const changeQty = (id, qty) => {
    dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty } });
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  }, [cart]);

  return (
    <div className="cart">
      <b>Subtotal: ${total}</b>
      <br />
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div className="cartlist" key={prod.id}>
            {/* <img className="cartimg" src={prod.thumbnail} alt={prod.title} /> */}
            <div className="">
              <span>{prod.title} :</span>&nbsp;
              <b>$ {prod.price}</b>
            </div>
            <div>
              <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                +
              </button>
              <span>{prod.qty}</span>
              <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                -
              </button>
            </div>
          </div>
        ))
      ) : (
        <span>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
