import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postOrder } from '../actions/fetchOrders';


class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      isValid: null,
      isOpen: false,
      isDisabled: true
    }
  }
  getInputValues(e) {
    e.preventDefault();
         let totalOrderPrice = 0;
         this.props.cart.cart.map(product => {
           let test = product.quantity * product.price
           return totalOrderPrice = totalOrderPrice + test
         })
         let order = {
           fullname: this.refs.userinfofullname.value,
           email: this.refs.email.value,
           phone: Number(this.refs.phone.value),
           address: [
             {
               streetAddress: this.refs.streetaddress.value,
               city: this.refs.city.value,
               zipcode: Number(this.refs.zipcode.value),
               country: this.refs.country.value
             }
           ],
           cardInfo: [
             {
               fullname: this.refs.paymentfullname.value,
               cardNumber: Number(this.refs.cardnumber.value),
               expireMonth: Number(this.refs.cardinfomonth.value),
               expireYear: Number(this.refs.cardinfoyear.value),
               cvc: Number(this.refs.cardinfocvc.value)
             }
           ],
           products: this.props.cart.cart,
           totalPrice: totalOrderPrice.toFixed(2)
         }

         this.refs.userinfoform.reset()
         this.refs.cardinfoform.reset()

          this.props.dispatch(postOrder(order))
          this.setState({
            isValid: true,
            isOpen: !this.state.isOpen
          })



  }
  handleChange(e) {
    e.preventDefault();
    if(this.refs.userinfofullname.value &&
       this.refs.email.value &&
       this.refs.phone.value &&
       this.refs.streetaddress.value &&
       this.refs.city.value &&
       this.refs.zipcode.value &&
       this.refs.country.value &&
       this.refs.paymentfullname.value &&
       this.refs.cardnumber.value &&
       this.refs.cardinfomonth.value.length === 2 &&
       this.refs.cardinfoyear.value.length === 4 &&
       this.refs.cardinfocvc.value.length === 3) {
         return this.setState({
           isDisabled: false
         })
       }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { cart } = this.props.cart;
    if(!this.state.isOpen) {
    if(cart.length === 0) {
      return (
        <div className="d-flex justify-content-center align-items-center no-items-in-cart">
          <p>Your cart is empty, click <NavLink to="/products">here</NavLink> and add some stuff to your cart</p>

        </div>
      )
    } else {
      let totalPrice = 0;
      const cartProducts = cart.map((product, index) => {
        totalPrice = totalPrice + product.totalPrice
        return (
          <div key={index.toString()} className="d-flex justify-content-around align-items-center mb-1">
            <p className="mb-0 checkout-cart-product-name">{product.product_name}</p>
            <p className="mb-0 checkout-cart-product-price">${product.price}</p>
            <input type="number" ref="quantity" defaultValue={product.quantity} className="checkout-quantity-product" />
          </div>
        )
      })
      return (
        <div className="d-flex">
          <div className="d-flex flex-column checkout-user-info">
            <div className="d-flex justify-content-center checkout-nav-div">
              <ul className="nav nav-pills d-flex justify-content-around checkout-nav" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">UserInfo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Payment</a>
                </li>
              </ul>
            </div>
            <div className="tab-content d-flex flex-column align-items-center justify-content-start" id="pills-TabContent">
              <form className="tab-pane fade show active checkout-div-one" id="pills-home" ref="userinfoform" role="tabpanel" aria-labelledby="pills-home-tab">
                <label htmlFor="fullname">Full Name</label>
                <input className="form-control form-control-log" type="text" id="fullname" ref="userinfofullname" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="email">Email</label>
                <input className="form-control form-control-log" type="email" id="email" ref="email" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="phone">PhoneNumber</label>
                <input className="form-control form-control-log" type="number" id="phone" ref="phone" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="street">Street Address</label>
                <input className="form-control form-control-log" type="text" id="street" ref="streetaddress" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="city">City</label>
                <input className="form-control form-control-log" type="text" id="city" ref="city" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="zipcode">Zip Code</label>
                <input className="form-control form-control-log" type="number" id="zipcode" ref="zipcode" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="country">Country</label>
                <input className="form-control form-control-log" type="text" id="country" ref="country" required onChange={this.handleChange.bind(this)} />
              </form>
              <form className="tab-pane fade checkout-div-two" id="pills-profile" ref="cardinfoform" role="tabpanel" aria-labelledby="pills-profile-tab">
                <label htmlFor="card-name">Full Name</label>
                <input className="form-control mb-3 input-field-payment" type="text" id="card-name" ref="paymentfullname" required onChange={this.handleChange.bind(this)} />
                <label htmlFor="card-number">Card Number</label>
                <input className="form-control mb-3 input-field-payment" type="number" id="card-number" ref="cardnumber" required onChange={this.handleChange.bind(this)} />
                <span className="d-flex justify-content-between checkout-payment-title">
                  <label>Expiration</label>
                  <label>CVC</label>
                </span>
                <span className="d-flex justify-content-start">
                  <input className="form-control input-field-payment-myc" type="number" placeholder="MM" ref="cardinfomonth" required onChange={this.handleChange.bind(this)} />
                  <input className="form-control input-field-payment-myc" type="number" placeholder="YYYY" ref="cardinfoyear" required onChange={this.handleChange.bind(this)} />
                  <input className="form-control input-field-payment-myc" type="number" placeholder="cvc" ref="cardinfocvc" required onChange={this.handleChange.bind(this)} />
                </span>
              </form>
            </div>
          </div>
          <div className="checkout-products d-flex flex-column justify-content-around">
            <div className="checkout-products-div d-flex flex-column">
              <div className="d-flex justify-content-around">
                <p>Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
              </div>
              {cartProducts}
            </div>
            <div className="d-flex justify-content-between send-order-total">
              <button className="btn btn-success place-order-button" disabled={this.state.isDisabled} onClick={this.getInputValues.bind(this)}>Send Order</button>
              <p className="d-flex align-items-center mb-0">Total: ${!this.state.isValid ? totalPrice.toFixed(2) : 0}</p>
            </div>
          </div>

        </div>
      )
    }} else {
      return (
        <Modal isOpen={this.state.isOpen} toggle={this.getInputValues.bind(this)}>
        <ModalBody>
          <p>Your order are send</p>
          <p> Your orderId is: {this.props.cart.orderId}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.toggle.bind(this)}>OK</Button>{' '}
        </ModalFooter>
      </Modal>
      )
    }
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(CheckOut);
