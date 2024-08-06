
import React from 'react';
import styled from 'styled-components';
import heroBackground from './images/Slide-22.png';

const HeroSection = styled.section`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 5rem 1rem;
  text-align: left;
  flex: 1;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <h1>Sanando Hoy</h1>
      <p>Sesiones individuales y cursos de terapias holísticas</p>
    </HeroSection>
  );
};

export default Hero;
