import React, { useState } from 'react'; 
import { useContext } from 'react';  
import styled from 'styled-components';
import products from '../datos/productos';
import { CartContext } from '../context/carrito';

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

const FilterContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #9F7DB7;
    border-radius: 10px;
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
  const { addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState('Todos');

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);

    if (selectedCategory === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  };

  return (
    <ProductsContainer>
      <h1>Productos</h1>
      <FilterContainer>
        <select value={filter} onChange={handleFilterChange}>
          <option value="Todos">Todos</option>
          <option value="Akashicos">Registros Akashicos</option>
          <option value="Reiki">Reiki</option>
          <option value="FengShui">Feng Shui</option>
        </select>
      </FilterContainer>
      <div>
        {filteredProducts.map(product => (
          <Product key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Duración: {product.duration}</p>
            <p>Precio en USD: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
          </Product>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;