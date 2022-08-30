import React, { useEffect, useReducer } from 'react';
import { CartReducer } from './CartManager/CartReducer';
import './style.css';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const [state, dispatch] = useReducer(CartReducer, { products: [], cart: [] });

  const fetchProduct = async () => {
    //const { data } = await axios.get('https://dummyjson.com/products');
    //dispatch({ type: 'ADD_PRODUCTS', payload: data.products });
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: 'ADD_PRODUCTS', payload: data.products })
      );
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(state);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
