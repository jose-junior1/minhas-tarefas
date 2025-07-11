import Tarefa from '../../compontents/Tarefa'
import { Main } from './styles'
import * as enums from '../../utils/enums/TarefaEnums'

const tarefas = [
  {
    titulo: 'Estudar React',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDO,
    descricao: 'Estudar React na EBAC'
  },
  {
    titulo: 'Pagar empréstimo',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE,
    descricao: 'Pagar empréstimo Nubank'
  },
  {
    titulo: 'Lavar louça',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Lavar a louça do almoço'
  },
  {
    titulo: 'Lazer',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDO,
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
