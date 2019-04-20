import React, { Component } from 'react'
import styled from 'styled-components'

import theme from '../theme'
import HistoryList from './HistoryList'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${theme.color.secondary};
`

const Board = styled.div`
  background: red;
  flex-grow: 1;
  margin: 8px 0;
  background-color: ${theme.color.primary};
  color: ${theme.color.text}
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 2px;
`

const Stats = styled.div`
  flex-grow: 1;
  display: flex;
  margin-bottom: 8px;
  `

  const Stat = styled.div`
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  border-radius: 2px;
  flex-grow: 1;
  margin: 8px;
  box-sizing: border-box;
  padding: 1rem;
  background: rgba(50, 50, 50, 0.8);
`

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Stats>
          <Stat>One</Stat>
          <Stat>Two</Stat>
          <Stat>Three</Stat>
          <Stat>Four</Stat>
        </Stats>
        <Board>
          <HistoryList />
        </Board>
        <Board>Chart</Board>
      </Wrapper>
    )
  }
}
export default Main
