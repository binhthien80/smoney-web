import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';
import "antd/dist/antd.css";

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
