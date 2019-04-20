import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components'
import Dashboard from './components/index'

const Routes = ({ match }) => {
      return (
        <Layout>
          <Switch>
            <Route exact path={match.url} render={Dashboard}></Route>
          </Switch>
        </Layout>
      );
    };

export default Routes;
