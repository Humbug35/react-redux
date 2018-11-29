import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/fetchOrders';
import OrderModel from './OrderModel';
//import Footer from './Footer';

class AllOrder extends Component {
  componentWillMount() {
    this.props.dispatch(fetchOrders())
  }
  render() {
    if(this.props.orders.orders.length === 0){
      return null
    }

    const orders = this.props.orders.orders.map(order => {
      return <OrderModel order={order} key={order._id}/>
    })
    return (
      <div className="d-flex flex-column">
        <div className="allorders-title-div container mt-5">
          <h4 className="col-sm allorders-title">OrderId</h4>
          <h4 className="col-sm allorders-title">Name</h4>
          <h4 className="col-sm allorders-title">Total Products</h4>
        </div>
        {orders}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  loading: state.isFetching
})
export default connect(mapStateToProps)(AllOrder);
