import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? '#1e90ff' : '#5e5e5e')};
  cursor: url('/pointer.png'), auto;
  &:hover {
    background-color: #fff;
    border: 1px solid darkblue;
    transition: all 0.1s ease-out;
    transform: scale(1.07);
    font-weight: bold;
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
