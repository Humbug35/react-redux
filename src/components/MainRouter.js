import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllOrder from './AllOrder';
import SingleOrder from './SingleOrder';
//import SignUp from './Register';
import Login from './Login';
import About from './About';
import NavBar from './Navbar';
import { PrivateRoute } from './PrivateRoute';


const LoginRoute = () => (
  <div className="login-page-div">
     <Route path="/" component={Login} />
  </div>
)

const OrderRoute = () => (
  <div>
    <NavBar />
    <div>
      <PrivateRoute exact path='/orders' component={AllOrder} />
      <PrivateRoute path='/orders/:orderId' component={SingleOrder} />
    </div>
  </div>
)

const AboutRoute = () => (
  <div>
    <NavBar />
    <div>
      <PrivateRoute path="/about" component={About} />
    </div>
  </div>
)

const ErrorPage = () => (
  <div>
    <h1>Page Not Found</h1>
    <h1>404</h1>
  </div>
)

// const accessDenied = () => (
//   <div>
//     <div>You must be logged in to see this page</div>
//     <Redirect to="/" />
//   </div>
// )


class MainRouter extends Component {
   render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginRoute} />
            <Route path="/orders" component={OrderRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route component={ErrorPage} />
          </Switch>
      </BrowserRouter>
    )
  }
}
export default MainRouter;
