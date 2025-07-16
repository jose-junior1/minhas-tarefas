import styled from 'styled-components'
import { pulsar } from '../../styles/animations'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  button:hover {
    animation: ${pulsar} 1.5s infinite;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid: 8px;
  margin-top: 16px;
`
