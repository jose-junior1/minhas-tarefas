import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    cursor: url('/cursor.png'), auto;
    max-height: 100vh;
    height: 100%;
  }
`

export const Main = styled.main`
  padding: 0 40px;
  height: 90vh;
  width: 60vw;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
  }
`

export const Titulo = styled.h2`
  margin: 40px 0;
  font-weight: bold;
  display: block;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 80px 24px 16px 24px;
    text-align: center;
  }
`

export const Campo = styled.input`
  width: 100%;
  border: 1px solid ${variaveis.cinzaChumbo};
  color: ${variaveis.cinzaChumbo};
  font-weight: bold;
  border-radius: 8px;
  background-color: ${variaveis.branco};
  padding: 8px;
  font-size: 14px;
  cursor: url('/text-cursor.png') 10 10, auto;
  &:hover {
    background-color: ${variaveis.branco};
    border: 1px solid green;
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
    font-weight: bold;
  }
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: url('/pointer.png') 10 2, auto;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ButtonSave = styled(Button)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
