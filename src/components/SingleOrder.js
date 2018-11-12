import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleOrder } from '../actions/fetchOrders';

class SingleOrder extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSingleOrder(this.props.match.params.orderId))
  }
  render() {
        if(this.props.order.length === 0) {
          return null
        }
        let order = this.props.order;
        let address = order.address.map((address, index) => {
            return (
              <ul className="address" key={index.toString()}>
                <li><strong>StreetAddress:</strong> {address.streetAddress}</li>
                <li><strong>ZipCode:</strong> {address.zipcode}</li>
                <li><strong>City:</strong> {address.city}</li>
                <li><strong>Country:</strong> {address.country}</li>
              </ul>
            )
        })
        let totalPriceArray = [];
        let products = order.products.map((product, index) => {
              let newPrice = product.price.replace('$', '');
              let priceToNumber = Number(newPrice);
              let totalPricePerProduct = priceToNumber * product.quantity;
              totalPriceArray.push(totalPricePerProduct);
              return (
                <div className="single-order-products" key={index.toString()}>
                  <p className="col-4 single-order-products">{product.product_name}</p>
                  <p className="col-2 single-order-products">{product.price}</p>
                  <p className="col-3 single-order-products">{product.Category}</p>
                  <p className="col-1 single-order-products">{product.quantity}</p>
                  <p className="col-2 single-order-products">{totalPricePerProduct}</p>
                </div>
              )
        })
        const totalPrice = totalPriceArray.reduce((acc, current) => acc + current);
     return (
        <div>
          <div>
                <div className="mb-5 mt-3 orderId-div">
                  <h5>OrderId: {order._id}</h5>
                </div>
                <div className="single-order-main-div mb-5">
                  <div className="single-order-name-and-shipping-div mb-5">
                    <div>
                      <h5>Client</h5>
                      <p><strong>Name:</strong> {order.fullName}</p>
                      <p><strong>Email:</strong> {order.email}</p>
                      <p><strong>PhoneNumber:</strong> 0{order.phonenumber}</p>
                    </div>
                    <div>
                      <h5>Shipping Address</h5>
                      {address}
                    </div>
                  </div>
                  <div>
                    <div className="single-order-products-title-div container">
                      <h5 className="col-4 single-order-products-title">Product Name</h5>
                      <h5 className="col-2 single-order-products-title">Price</h5>
                      <h5 className="col-3 single-order-products-title">Category</h5>
                      <h5 className="col-1 single-order-products-title">Quantity</h5>
                      <h5 className="col-2 single-order-products-title">TotalPrice</h5>
                    </div>
                    <div className="container">
                      {products}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="d-flex justify-content-end container">TotalPrice: ${totalPrice.toFixed(2)}</p>
                </div>
              </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.singleOrder,
  loading: state.isFetching,
  error: state.error
})

export default connect(mapStateToProps)(SingleOrder);
