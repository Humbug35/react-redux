import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AllOrder from './AllOrder';
import SingleOrder from './SingleOrder';
import SignUp from './Register';
import Login from './Login';
import ErrorPage from './ErrorPage';
import { PrivateRoute } from './PrivateRoute';


class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <PrivateRoute exact path='/orders' component={AllOrder} />
          <PrivateRoute path='/orders/:orderId' component={SingleOrder} />
          <Redirect exact from='/' to='/orders' />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default MainRouter;
