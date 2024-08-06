
import React from 'react';
import styled from 'styled-components';

const ProductTitle = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const MainSection = styled.section`
  padding: 2rem 1rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
`;

const ProductSection = styled.section`
  padding: 2rem 1rem;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Product = styled.div`
 background: #9F7DB7;
  color: #fff;
  border: 1px solid #ddd;
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

const FeaturedProducts = () => {
  return (
        <MainSection>
          <ProductTitle>Productos Destacados</ProductTitle>
          <ProductSection id="products">
          <Product>
            <h3>Registros Akashicos</h3>
            <p>Lectura individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Sesion de Reiki</h3>
            <p>Sesion individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Analisis de Feng Shui</h3>
            <p>Sesion presencial. </p>
            <p>Duracion: 2 horas. </p>
          </Product>
    </ProductSection>
    </MainSection>
   );
};

export default FeaturedProducts;
