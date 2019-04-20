import styled from 'styled-components'
import theme from '../../theme'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  color: inherit;
  font-weight: 500;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`

export const HeaderRow = styled.div`
  display: flex;
  font-weight: 500;
  color: ${theme.color.textSubTitle};
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
`

export const Row = styled.div`
  display: flex;
  color: ${theme.color.subText};
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
`

export const Item = styled.div`
  &:first-child {
    padding-left: 0;
  }
  box-sizing: border-box;
  padding: 1rem;
  flex-basis: 18%;
`

export const Important = styled(Item)`
  span {
    padding: 4px 8px;
    border-radius: 2px;
    color: white;
    background-color: ${props =>
      props.type === 'high'
        ? theme.color.red
        : props.type === 'medium'
        ? theme.color.orange
        : theme.color.green};
  }
`

export const Purpose = styled(Item)`
  flex-grow: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Money = styled(Item)`
  color: ${props => (props.increased ? theme.color.green : theme.color.red)};
`
