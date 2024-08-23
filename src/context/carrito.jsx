import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      setIsCartOpen(true);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const completePurchase = () => {
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isCartOpen, toggleCart, completePurchase, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


  