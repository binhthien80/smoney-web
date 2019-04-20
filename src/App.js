import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';

const login = () => (
  <div>Login</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={login} />
            <Route path="/" component={routes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
