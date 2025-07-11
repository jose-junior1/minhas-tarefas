import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/TarefaEnums'

export type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tags parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tags>
      <S.Tags parametro="status" status={status}>
        {status}
      </S.Tags>
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
