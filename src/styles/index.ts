import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../compontents/Tarefa/styles'
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
  }
`

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  margin: 40px 0;
  font-weight: bold;
  display: block;
  font-size: 18px;
`

export const Campo = styled.input`
  width: 100%;
  border: 1px solid #666;
  color: #666;
  font-weight: bold;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  font-size: 14px;
  cursor: url('/text-cursor.png') 10 10, auto;
  &:hover {
    background-color: #fff;
    border: 1px solid green;
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
    font-weight: bold;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const ButtonSave = styled(Button)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
