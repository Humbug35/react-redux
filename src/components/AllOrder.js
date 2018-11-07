import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/fetchOrders';
import OrderModel from './OrderModel';
import NavBar from './Navbar';
//import Footer from './Footer';

class AllOrder extends Component {
  componentWillMount() {
    this.props.dispatch(fetchOrders())
  }
  render() {
    const orders = this.props.orders.map(order => {
      return <OrderModel order={order} key={order._id}/>
    })
    return (
      <div>
        <NavBar />
        <div className="allorders-title-div container mt-5">
          <h4 className="col-sm allorders-title">OrderId</h4>
          <h4 className="col-sm allorders-title">Name</h4>
          <h4 className="col-sm allorders-title">Total Products</h4>
        </div>
        <div>
          {orders}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
})
export default connect(mapStateToProps)(AllOrder);