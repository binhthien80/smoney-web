import styled from 'styled-components'
import theme from '../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.2rem 1rem 0 1rem;
  background-color: ${theme.color.secondary};
  height: 100vh;
  overflow: scroll;
`