import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 50rem;
  }

  button {
    padding: 1rem;
    border: none;
    background-color: #9F7DB7;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #8c6fa2;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contacto</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Asunto"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
