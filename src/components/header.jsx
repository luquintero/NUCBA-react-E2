
import React, { createContext, useState, useContext } from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const MenuContext = createContext();

const HeaderContainer = styled.header`
  background: #f9f9f9;
  color: #a5a5a5;
  padding: 1rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
  }

  a {
    color: #9F7DB7;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .menu {
    display: flex;
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
      flex-direction: column;
      width: 100%;
      background: #f9f9f9;
      position: absolute;
      top: 60px;
      left: 0;
    }

    .menu.active {
      display: flex;
    }

    .menu-toggle {
      display: block;
    }
  }
`;

const Styledlogo = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      <HeaderContainer>
        <Navbar>
          <Styledlogo src={logo} alt="Logo" />
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre Mi</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </Navbar>
      </HeaderContainer>
    </MenuContext.Provider>
  );
};

export default Header;
