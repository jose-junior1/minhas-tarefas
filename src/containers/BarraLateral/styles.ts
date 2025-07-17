import styled from 'styled-components'
import { pulsar } from '../../styles/animations'
import variaveis from '../../styles/variaveis'

interface AsideProps {
  $aberto: boolean
}

export const BotaoHamburguer = styled.button<AsideProps>`
  display: none;
  position: fixed;
  top: 10px;
  left: 20px;
  background: transparent;
  border: none;
  font-size: 2em;
  z-index: 1001;
  color: ${variaveis.cinzaEscuro};
  font-weight: bold;
  transition: top 0.3s ease, left 0.3s ease;

  @media (max-width: 768px) {
    display: block;
    ${({ $aberto }) =>
      $aberto
        ? `
    top: 10px;
    left: 20px;
  `
        : `
    top: 10px;
    left: 20px;
  `}
  }
`

export const Aside = styled.aside<AsideProps>`
  padding: 16px;
  background-color: ${variaveis.cinzaClaro2};
  height: 100vh;
  transition: transform 0.3s ease-in-out;

  button:hover {
    animation: ${pulsar} 1.5s infinite;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 60%;
    transform: ${({ $aberto }) =>
      $aberto ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 0;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
    text-align: center;

    button {
      margin-top: 48px;
      width: 100%;
      padding: 10px;
      animation: ${pulsar} 1s infinite;
    }

    input {
      margin-top: 48px;
    }
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 8px;
  }
`
