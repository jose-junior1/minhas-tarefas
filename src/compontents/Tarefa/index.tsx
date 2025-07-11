import { useState } from 'react'
import * as S from './styles'

export type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tags prioridade={prioridade}>{prioridade}</S.Tags>
      <S.Tags status={status}>{status}</S.Tags>
      <S.Description value={descricao} />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancelAndRemove onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.ButtonCancelAndRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.ButtonCancelAndRemove>Remover</S.ButtonCancelAndRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
