import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('tarefas', JSON.stringify(state.tarefas.itens))
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
