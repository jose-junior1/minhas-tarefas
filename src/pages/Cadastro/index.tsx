import BarraLateral from '../../containers/BarraLateral'
// import { Aside } from '../../containers/BarraLateral/styles'
import Formulario from '../../containers/Formulario'

const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
