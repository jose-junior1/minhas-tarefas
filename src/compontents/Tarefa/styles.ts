import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/TarefaEnums'
import { Button } from '../../styles'

type TagProps = {
  $prioridade?: enums.Prioridade
  $status?: enums.Status
  $parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.$parametro === 'status') {
    if (props.$status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.$status === enums.Status.CONCLUIDO) return variaveis.verde
  } else {
    if (props.$prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho
    if (props.$prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.alaranjado
  }

  return variaveis.cinzaClaro
}

export const Card = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: block;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    input,
    h3 {
      cursor: url('/pointer.png') 10 2, auto;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tags = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: ${variaveis.branco};
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;

  @media (max-width: 768px) {
    padding: 8px;
    width: 30%;
    margin: 16px 10px;
  }
`

export const Description = styled.textarea`
  color: ${variaveis.cinza2};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  margin-bottom: 16px;
  border: none;
  background: transparent;

  @media (max-width: 768px) {
    text-align: justify;
    height: 100px;
    padding: 0 10px;
  }
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;

  @media (max-width: 768px) {
    display: flex;
    button {
      width: 50%;
      padding: 16px;
    }
  }
`

export const ButtonCancelAndRemove = styled(Button)`
  background-color: ${variaveis.vermelho};
`
