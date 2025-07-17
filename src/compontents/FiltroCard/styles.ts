import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  border: 1px solid
    ${(props) => (props.$ativo ? variaveis.azul : variaveis.cinza)};
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) =>
    props.$ativo ? variaveis.branco : variaveis.branco2};
  color: ${(props) => (props.$ativo ? variaveis.azul : variaveis.cinzaChumbo)};
  cursor: url('/pointer.png'), auto;
  &:hover {
    background-color: ${variaveis.branco};
    border: 1px solid darkblue;
    transition: all 0.1s ease-out;
    transform: scale(1.07);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 160px;
    margin: 5px auto;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-weight: 400;
  font-size: 14px;
`
