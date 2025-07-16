import styled from 'styled-components'
import { pulsar } from '../../styles/animations'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  color: #666666;
  font-size: 14px;
  font-weight: bold;

  textarea {
    resize: none;
    margin: 16px 0;
    height: 183px;
    &:hover {
      border: 1px solid darkcyan;
      transform: scale(1.02);
      transition: transform 0.1s ease-in-out;
    }
  }

  button {
    color: #fff;
    padding: 8px;
    border-radius: 10px;
    border: none;
    cursor: url('/pointer.png') 10 2, auto;
    &:hover {
      animation: ${pulsar} 1s infinite;
    }
  }
`

export const Opcoes = styled.div`
  margin-bottom: 32px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin: 0 6px;
  }

  input,
  label {
    cursor: url('/pointer.png') 10 2, auto;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
