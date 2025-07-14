import { useSelector } from 'react-redux'
import Tarefa from '../../compontents/Tarefa'
import { Main } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Main>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
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
    </Main>
  )
}

export default ListaDeTarefas
