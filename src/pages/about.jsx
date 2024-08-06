import React from 'react';
import styled from 'styled-components';
import imagez from './images/Sobre-mi.png'

const AboutContainer = styled.div`
  padding: 2rem;
  width: 100%;
  margin: auto;
  text-align: center;

  img {
    max-width: 300px;
    height: auto;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <img src={imagez} alt="Sobre-mi"/>
      <h1>Sobre Mi</h1>
      <p>Soy metafísica, lectora de Registros Akáshicos, Maestra de Magnified Healing fase 2, instructora de Feng Shui para ambos hemisferios,Master Reiki sistema Usui, Instructora de danzas energéticas y más.</p>
      <p>Aún hoy sigo mis estudios convencida, que siempre hay más para aprender y compartir, todo aquello valioso que vaya encontrando.</p>
      <p>Mi propósito es enseñar, orientar y acompañar a todas las personas que estén preparadas para un cambio hacia el despertar.</p>
    </AboutContainer>
  );
};

export default About;
