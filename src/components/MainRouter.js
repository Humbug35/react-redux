import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllOrder from './AllOrder';
import SingleOrder from './SingleOrder';
import SignUp from './Register';
import AdminLogin from './AdminLogin';
import AddProduct from './AddProduct';
import About from './About';
import AuthNavBar from './AuthNavbar';
import ProductList from './Products';
import SingleProduct from './SingleProduct';
import Category from './Category';
import Footer from './Footer';
import Header from './Header';
import CheckOut from './CheckOut';
import { PrivateRoute } from './PrivateRoute';


const AdminLoginRoute = () => (
  <div className="login-page-div login-background">
     <Route path="/admin-login" component={AdminLogin} />
  </div>
)

const AddProductRoute = () => (
  <div>
    <AuthNavBar />
    <div className="route-order-path-div">
      <PrivateRoute path="/add-product" component={AddProduct} />
    </div>
    <Footer />
  </div>
)

const OrderRoute = () => (
  <div>
    <AuthNavBar />
    <div className="route-order-path-div">
      <PrivateRoute exact path='/orders' component={AllOrder} />
      <PrivateRoute path='/orders/:orderId' component={SingleOrder} />
    </div>
    <Footer />
  </div>
)

const ProductRoute = () => (
  <div>
    <Header />
    <div className="d-flex justify-content-center route-products-path-div">
      <Route exact path="/products" component={ProductList} />
      <Route path="/products/:productId" component={SingleProduct} />
    </div>
    <Footer />
  </div>
)

const CategoryRoute = () => (
  <div>
    <Header />
    <div className="d-flex route-checkout-path-div">
      <Route path="/category/:category" component={Category} />
    </div>
    <Footer />
  </div>
)

const CheckoutRoute = () => (
  <div>
    <Header />
    <div className="route-checkout-path-div">
      <Route path="/checkout" component={CheckOut} />
    </div>
    <Footer />
  </div>
)

const AboutRoute = () => (
  <div>
    <Header />
    <div>
      <Route path="/about" component={About} />
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



class MainRouter extends Component {
   render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/admin-login" component={AdminLoginRoute} />
            <Route path="/signup" component={SignUp} />
            <Route path="/products" component={ProductRoute} />
            <Route path="/category" component={CategoryRoute} />
            <Route path="/orders" component={OrderRoute} />
            <Route path="/add-product" component={AddProductRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route path="/checkout" component={CheckoutRoute} />
            <Route component={ErrorPage} />
          </Switch>
      </BrowserRouter>
    )
  }
}
export default MainRouter;
