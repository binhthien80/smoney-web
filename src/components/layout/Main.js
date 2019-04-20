import React, { Component } from "react"
import styled from "styled-components"
import StatsComponent from './StatsComponent/Stat'
import theme from '../theme'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Board = styled.div`
  background: red;
  flex-grow: 1;
  margin: 8px 0;
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
        <Board>Smoney Board</Board>
        <Board>Chart</Board>
      </Wrapper>
    )
  }
}
export default Main
