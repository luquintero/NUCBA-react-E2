
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #B8D0EB;
  color: #000;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <p>&copy; 2024 Sanando Hoy.</p>
    </FooterContainer>
  );
};

export default Footer;

