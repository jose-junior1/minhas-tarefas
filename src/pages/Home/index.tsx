import BotaoAdicionar from '../../compontents/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral visivel={true} mostrarFiltros={true} />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
