import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const RodapeContainer = styled.footer`
  background-color: ${variaveis.cinzaChumbo};
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 40px;
  p {
    color: ${variaveis.branco};
    font-weight: bold;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    p {
      font-size: 16px;
    }
  }
`

export const Links = styled.a`
  text-decoration: none;
  color: ${variaveis.cinzaEscuro};
  cursor: url('/pointer.png') 10 2, auto;
`
