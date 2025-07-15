import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
export const Campo = styled.input`
  width: 100%;
  border: 1px solid #666;
  color: #666;
  font-weight: bold;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  font-size: 14px;
  cursor: url('/text-cursor.png') 10 10, auto;
  &:hover {
    background-color: #fff;
    border: 1px solid green;
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
    font-weight: bold;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
