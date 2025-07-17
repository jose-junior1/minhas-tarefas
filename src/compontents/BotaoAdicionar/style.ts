import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { pulsar } from '../../styles/animations'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  font-size: 40px;
  text-decoration: none;
  position: fixed;
  bottom: 150px;
  right: 20vw;
  cursor: url('/pointer.png') 10 2, auto;

  &:hover {
    animation: ${pulsar} 1s infinite;
  }

  @media (max-width: 768px) {
    z-index: 100;
    right: 10px;
    bottom: 110px;
    width: 40px;
    height: 40px;
    font-size: 32px;
  }
`
