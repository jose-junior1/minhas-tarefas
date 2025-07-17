import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import FiltroCard from '../../compontents/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import { Campo, Button } from '../../styles'
import * as enums from '../../utils/enums/TarefaEnums'

type Props = {
  mostrarFiltros: boolean
  visivel: boolean
}

const BarraLateral = ({ mostrarFiltros, visivel }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const [menuAberto, setMenuAberto] = useState(false)
  const [mostrarX, setMostrarX] = useState(false)

  const mostrarIcone = () => {
    if (menuAberto) {
      setMostrarX(false)
      setMenuAberto(false)
    } else {
      setMenuAberto(true)
      setTimeout(() => setMostrarX(true), 300)
    }
  }

  const menu = (e: React.TransitionEvent) => {
    if (
      e.propertyName === 'transform' &&
      e.target instanceof HTMLElement &&
      e.target.tagName === 'ASIDE' &&
      menuAberto
    ) {
      setMostrarX(true)
    }
  }

  return (
    <>
      <S.BotaoHamburguer
        $aberto={menuAberto}
        onClick={mostrarIcone}
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
      >
        {mostrarX ? 'X' : '☰'}
      </S.BotaoHamburguer>
      <S.Aside $aberto={menuAberto} onTransitionEnd={menu}>
        {mostrarFiltros === true && visivel === visivel ? (
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
    </>
  )
}

export default BarraLateral
