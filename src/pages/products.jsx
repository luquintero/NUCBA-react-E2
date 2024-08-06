import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 2rem;
  width: 100%;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  div {
    padding: 2rem 1rem;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }
`;

const Product = styled.div`
color: #9F7DB7;
  border: 1px solid #9F7DB7;
  margin: 1rem;
  padding: 1rem;
  flex: 1 1 calc(33% - 2rem);
  box-sizing: border-box;
  text-align: center;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const Products = () => {
  return (
    <ProductsContainer>
      <h1>Productos</h1>
      <div>
          <Product>
            <h3>Registros Akashicos - Presencial</h3>
            <p>Lectura individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Registros Akashicos - Virtual</h3>
            <p>Lectura individual y virtual. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Registros Akashicos - Curso</h3>
            <p>Curso de iniciación a la lectura de Registros Akashicos. </p>
            <p>Duracion: 3 horas. </p>
          </Product>
          <Product>
            <h3>Sesion de Reiki</h3>
            <p>Sesion individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Iniciación al Reiki</h3>
            <p>Iniciación al nivel 1 de Reiki. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Master Reiki</h3>
            <p>Intensivo 3 niveles de Reiki. </p>
            <p>Duracion: 3 horas. </p>
          </Product>
          <Product>
            <h3>Analisis de Feng Shui Completo</h3>
            <p>Sesion presencial. </p>
            <p>Duracion: 2 horas. </p>
          </Product>
          <Product>
            <h3>Analisis de Feng Shui Parcial</h3>
            <p>Sesion virtual. </p>
            <p>Duracion: 1 horas. </p>
          </Product>
          <Product>
            <h3>Curso de Feng Shui</h3>
            <p>Iniciación al Feng Shui. Modalidad virtual y presencial. </p>
            <p>Duracion: 3 horas. </p>
          </Product>
    </div>
    </ProductsContainer>
  );
};

export default Products;
