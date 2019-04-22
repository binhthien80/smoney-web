import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
import 'antd/dist/antd.css'
import webservices from './utils'
import { setSESSION } from './utils/session'
import jwt from 'jsonwebtoken'
import {} from './actions';

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

class App extends Component {
  state = {
    login: {
      email: '',
      password: '',
    },
    register: {
      username: '',
      email: '',
      'new-password': '',
      'confirm-password': '',
      gender: 'male',
      salary: 0,
      'salary-date': '',
      birthday: '',
    },
  }

  handleLoginFormChange = event => {
    const { name, value } = event.target
    const nextLoginState = {
      ...this.state.login,
      [name]: value,
    }
    this.setState({
      ...this.state,
      login: nextLoginState,
    })
  }

  handleRegisterFormChange = event => {
    const { name, value } = event.target
    const nextRegisterState = {
      ...this.state.register,
      [name]: value,
    }

    this.setState({
      ...this.state,
      register: nextRegisterState,
    })
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    alert('Login Submited!')
    const { login : { email, password } } = this.state;
    const data = {email, password}
    webservices.post('/login', data).then(rs => {
        setSESSION('token', rs.data.accessToken)
        let jwtObj = jwt.decode(rs.data.accessToken, {complete: true});
        console.log(jwtObj.payload)
        console.log(rs)
      })
  }

  handleRegisterSubmit = event => {
    event.preventDefault()
    alert('Register Submited!')
  }

  render() {
    const {
      handleLoginFormChange,
      handleRegisterFormChange,
      handleLoginSubmit,
      handleRegisterSubmit,
    } = this
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/register"
              render={() => (
                <Register
                  onSubmit={handleRegisterSubmit}
                  onChange={handleRegisterFormChange}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  onSubmit={handleLoginSubmit}
                  onChange={handleLoginFormChange}
                />
              )}
            />
            <Route path="/" component={routes} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
