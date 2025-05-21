import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((product) => product.id === productId);
    if (productIndex !== -1) {
      updatedCart.splice(productIndex, 1);
     setCart(updatedCart); 
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
