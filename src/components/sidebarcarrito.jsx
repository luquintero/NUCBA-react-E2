import React, { useContext } from 'react';
import { CartContext } from '../context/carrito';
import styled from 'styled-components';

const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  padding: 2rem;
  overflow-y: auto;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
`;

const QuantityButtons = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
`;

const CartTotal = styled.div`
  font-size: 1.5rem;
  text-align: right;
  margin-top: 2rem;
`;

const CartSidebarComponent = () => {
  const { cart, isCartOpen, toggleCart, clearCart, removeFromCart, completePurchase, updateCartItemQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartSidebar isOpen={isCartOpen}>
      <button onClick={toggleCart}>x</button>
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}> 
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <QuantityButtons>
            <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </QuantityButtons>
          </CartItem>
        ))
      )}
      <CartTotal>Total: ${totalPrice.toFixed(2)}</CartTotal>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button onClick={completePurchase}>Finalizar Compra</button>
    </CartSidebar>
  );
};

export default CartSidebarComponent;

