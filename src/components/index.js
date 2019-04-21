import React from 'react'
import { Layout } from 'antd'
import Menu from './layout/Menu/index'
import Main from './layout/Main'
import TopNav from './layout/TopNav'

const { Sider, Content } = Layout

export default props => (
  <Layout>
    <Sider>
      <Menu />
    </Sider>
    <Layout>
      <Content>
        <Main />
      </Content>
    </Layout>
    <TopNav />
  </Layout>
)
