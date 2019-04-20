import React, { Component } from "react"
import { Progress } from 'antd';
import styled from 'styled-components'
import theme from './../../theme';
export default class StatsComponent extends Component {
  state = {
    title: "Todays Income",
    percent: 50
  }
  render() {
    const {title,percent} = this.state;
    return (
      <div>
        <Title>{title}</Title>
        <Info>
          <p>Avg. Session</p>
          <p>max: 40</p>
        </Info>
        <Progress percent={percent} showInfo={false} />
      </div>
    )
  }
}

const Title = styled.div`
  color: ${theme.color.text};
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.color.subText};
  font-size: 12px;
`