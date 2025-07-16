import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../compontents/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import { Campo, Button } from '../../styles'
import * as enums from '../../utils/enums/TarefaEnums'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros === true ? (
        <>
          <Campo
            type="text"
            placeholder="Procurar"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDO}
              criterio="status"
              legenda="concluídas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </S.Filtros>
        </>
      ) : (
        // <Button type="button" as={Link} to="/" title="Voltar">
        //   Voltar a lista de tarefas
        // </Button>
        <Button onClick={() => navigate('/')} title="Página Inicial">
          Voltar a lista de tarefas
        </Button>
      )}
    </S.Aside>
  )
}

export default BarraLateral
