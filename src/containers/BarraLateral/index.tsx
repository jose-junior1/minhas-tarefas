import FiltroCard from '../../compontents/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.Campo type="text" placeholder="Procurar" />
      <S.Filtros>
        <FiltroCard contador={1} legenda="pendentes" />
        <FiltroCard contador={2} legenda="concluídas" />
        <FiltroCard contador={3} legenda="urgentes" />
        <FiltroCard contador={4} legenda="importantes" />
        <FiltroCard contador={5} legenda="nomal" />
        <FiltroCard contador={15} legenda="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
