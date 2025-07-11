import Tarefa from '../../compontents/Tarefa'
import { Main } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    prioridade: 'urgente',
    status: 'concluído',
    descricao: 'Estudar React na EBAC'
  },
  {
    titulo: 'Pagar empréstimo',
    prioridade: 'urgente',
    status: 'pendente',
    descricao: 'Pagar empréstimo Nubank'
  },
  {
    titulo: 'Lavar louça',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Lavar a louça do almoço'
  },
  {
    titulo: 'Lazer',
    prioridade: 'importante',
    status: 'concluído',
    descricao: 'Jogar no PS5'
  }
]

const ListaDeTarefas = () => {
  return (
    <Main>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeTarefas
