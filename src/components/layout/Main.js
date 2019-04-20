import React, { Component } from 'react'
import { Wrapper } from './styled'
import { Route } from 'react-router-dom'

import Dashboard from './Dashboard'

class Main extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Route exact path="/" component={Dashboard} />
        </Wrapper>
      </>
    )
  }
}
export default Main
