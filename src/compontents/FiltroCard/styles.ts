import styled from 'styled-components'
import { Props } from '.'

type PropsSeLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSeLegendaEContador>`
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
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
