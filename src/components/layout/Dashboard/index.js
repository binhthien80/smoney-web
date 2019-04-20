import React from 'react'
import { Card } from './styled'
import { Row, Col } from 'antd'

// Components
import StatsComponent from '../StatsComponent/Stat'
import Chart from '../Chart/index'
import HistoryList from '../HistoryList'

import { BlurButton } from '../../UICommon/Button'
import { Link } from 'react-router-dom'

export default () => (
  <>
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <StatsComponent />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <StatsComponent />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <StatsComponent />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <StatsComponent />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Link to="/earning">
          <BlurButton color="green">Earning</BlurButton>
        </Link>
      </Col>
      <Col span={12}>
        <Link to="spending">
          <BlurButton color="red">Spending</BlurButton>
        </Link>
      </Col>
    </Row>
    <Row gutter={16}>
      <Card>
        <HistoryList />
      </Card>
    </Row>
    <Row gutter={16}>
      <Card>
        <Chart />
      </Card>
    </Row>
  </>
)
