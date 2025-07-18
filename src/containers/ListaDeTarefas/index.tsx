import { useSelector } from 'react-redux'
import Tarefa from '../../compontents/Tarefa'
import * as S from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `
        ${quantidade} tarefa(s) encontrada(s) como: "todas" ${complementacao}
      `
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio} | ${valor}" ${complementacao}`
    }

    return mensagem
  }

  const qntTarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(qntTarefas.length)

  return (
    <S.Main>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {qntTarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  )
}

export default ListaDeTarefas
