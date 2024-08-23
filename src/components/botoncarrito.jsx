import React, { useContext } from 'react';
import { CartContext } from '../context/carrito';
import styled from 'styled-components';
import iconocarrito from './images/icono-carrito.png';

const CartButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #9F7DB7;
  color: #fff;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;

const Cart = () => {
  const { toggleCart } = useContext(CartContext);

  return (
    <CartButton onClick={toggleCart}>
        <img src={iconocarrito} alt="Carrito" style={{ width: '30px', height: '30px' }} />
    </CartButton>
   
  );
};

export default Cart;