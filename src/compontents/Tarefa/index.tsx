import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

export type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tags $parametro="prioridade" $prioridade={prioridade}>
        {prioridade}
      </S.Tags>
      <S.Tags $parametro="status" $status={status}>
        {status}
      </S.Tags>
      <S.Description value={descricao} readOnly />
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
            <S.ButtonCancelAndRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancelAndRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
