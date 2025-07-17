import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => {
  return (
    <>
      <BarraLateral visivel={true} mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
