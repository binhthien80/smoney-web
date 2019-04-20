import React, { Component } from "react"
import styled from "styled-components"
import StatsComponent from './StatsComponent/Stat'
import theme from '../theme'
import Chart from './Chart/index'
import HistoryList from './HistoryList'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.2rem 1rem 0 1rem;
  background-color: ${theme.color.secondary};
  min-height: 100vh;
`

const Board = styled.div`
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
  background: ${theme.color.primary}
`

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Stats>
          <Stat><StatsComponent/></Stat>
          <Stat><StatsComponent/></Stat>
          <Stat><StatsComponent/></Stat>
          <Stat><StatsComponent/></Stat>
        </Stats>
        <Board>
          <HistoryList />
        </Board>
        <Board><Chart></Chart></Board>
      </Wrapper>
    )
  }
}
export default Main
