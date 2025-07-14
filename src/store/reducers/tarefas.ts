import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/TarefaEnums'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'Estudar JavaScript com o Gustavo Guanabara'
    },
    {
      id: 2,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Estudar React para conseguir primeira vaga dev'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Estudar TypeScript para fundamentar React'
    },
    {
      id: 4,
      titulo: 'Lavar louça',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao: 'Lavar a louça da janta / café'
    },
    {
      id: 5,
      titulo: 'Arrumar a cama',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao:
        'Dobrar as cobertas, arrumar os travesseiros e esticar o lençol'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
