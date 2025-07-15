import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #44bd32;
  color: #fff;
  font-size: 40px;
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: url('/pointer.png') 10 2, auto;
`
