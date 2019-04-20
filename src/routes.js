import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout'

const test3 = () => (<div>-------Test3--------</div>)
const test4 = () => (<div>-------Test4 -------</div>)
const HomePage = () => (<div>-------index -------</div>)
const Routes = ({ match }) => {
      return (
        <Layout>
          <Switch>
            <Route path={`${match.url}test3`} component={test3} ></Route>
            <Route path={`${match.url}test4`} component={test4} ></Route>
            <Route exact path={match.url} render={HomePage}></Route>
          </Switch>
        </Layout>
      );
    };

export default Routes;
