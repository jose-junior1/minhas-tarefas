import { useEffect, useState, useRef, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { ButtonSave, Button } from '../../styles'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../utils/enums/TarefaEnums'

export type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarDescricao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (estaEditando && descriptionRef.current) {
      descriptionRef.current.focus()
    }
  }, [estaEditando])

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDO}
          onChange={alteraStatusTarefa}
        />
        <S.Title>
          {estaEditando && <em>Editando: </em>}
          {status === enums.Status.CONCLUIDO ? <s>{titulo}</s> : titulo}
        </S.Title>
      </label>
      <S.Tags $parametro="prioridade" $prioridade={prioridade}>
        {prioridade}
      </S.Tags>
      <S.Tags $parametro="status" $status={status}>
        {status}
      </S.Tags>
      <S.Description
        ref={descriptionRef}
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao: descricaoOriginal,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelAndRemove onClick={cancelarDescricao}>
              Cancelar
            </S.ButtonCancelAndRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
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
