import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllOrder from './AllOrder';
import SingleOrder from './SingleOrder';
import SignUp from './Register';
import Login from './Login';
import About from './About';
import AuthNavBar from './AuthNavbar';
import ProductList from './Products';
import SingleProduct from './SingleProduct';
import Category from './Category';
import Footer from './Footer';
import Header from './Header';
import CheckOut from './CheckOut';
import { PrivateRoute } from './PrivateRoute';


const LoginRoute = () => (
  <div className="login-page-div">
     <Route path="/" component={Login} />
  </div>
)

const OrderRoute = () => (
  <div>
    <AuthNavBar />
    <div>
      <PrivateRoute exact path='/orders' component={AllOrder} />
      <PrivateRoute path='/orders/:orderId' component={SingleOrder} />
    </div>
    <Footer />
  </div>
)

const ProductRoute = () => (
  <div className="routediv">
    <Header />
    <div className="d-flex routedivpath">
      <Route exact path="/products" component={ProductList} />
      <Route path="/products/:productId" component={SingleProduct} />
    </div>
    <Footer />
  </div>
)

const CategoryRoute = () => (
  <div className="routediv">
    <Header />
    <div className="d-flex routedivpath">
      <Route path="/category/:category" component={Category} />
    </div>
    <Footer />
  </div>
)

const AboutRoute = () => (
  <div>
    <AuthNavBar />
    <div>
      <PrivateRoute path="/about" component={About} />
    </div>
    <Footer />
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
            <Route path="/signup" component={SignUp} />
            <Route path="/products" component={ProductRoute} />
            <Route path="/category" component={CategoryRoute} />
            <Route path="/orders" component={OrderRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route path="/checkout" component={CheckOut} />
            <Route component={ErrorPage} />
          </Switch>
      </BrowserRouter>
    )
  }
}
export default MainRouter;
