import styled from 'styled-components'
import theme from '../../theme'

export const Card = styled.div`
  flex-grow: 1;
  background-color: ${theme.color.primary};
  color: ${theme.color.text}
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 8px 0;
`
