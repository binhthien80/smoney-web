import React, { Component } from 'react'
import { Wrapper } from './styled'
import { Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import Earning from './Earning'
class Main extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Route exact path="/" component={Dashboard} />
          <Route path="/earning" component={Earning} />
        </Wrapper>
      </>
    )
  }
}
export default Main
