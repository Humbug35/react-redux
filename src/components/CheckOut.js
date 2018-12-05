import React, { Component } from 'react';
import { connect } from 'react-redux';


class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      isValid: null
    }
  }
  componentDidMount() {
    console.log('Checkout', this.props.cart.cart)
    console.log(this.props.cart.cart)
  }
  getInputValues(e) {
    e.preventDefault();
    if(this.refs.userinfofullname.value === '' ||
       this.refs.email.value === '' ||
       this.refs.phone.value === '' ||
       this.refs.streetaddress.value === '' ||
       this.refs.city.value === '' ||
       this.refs.zipcode.value === '' ||
       this.refs.country.value === '' ||
       this.refs.paymentfullname.value === '' ||
       this.refs.cardnumber.value === '' ||
       this.refs.cardinfomonth.value === '' ||
       this.refs.cardinfoyear.value === '' ||
       this.refs.cardinfocvc.value === '') {
         return this.setState({
           isValid: false
         })
       } else {
         let totalOrderPrice = 0;
         this.props.cart.cart.map(product => {
           let test = product.quantity * product.price
           return totalOrderPrice = totalOrderPrice + test
         })
         console.log('Total', totalOrderPrice)
         let order = {
           fullname: this.refs.userinfofullname.value,
           email: this.refs.email.value,
           phone: Number(this.refs.phone.value),
           address: [
             {
               streetaddress: this.refs.streetaddress.value,
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
         fetch('http://localhost:5000/orders', {
           method: 'POST',
           headers: { 'Content-type': 'application/json' },
           body: JSON.stringify(order)
         })
         this.refs.userinfoform.reset()
         this.refs.cardinfoform.reset()
         this.setState({
           isValid: true
         })
       }
  }

  render() {
    const { cart } = this.props.cart;
    if(cart.length === 0) {
      return (
        <p className="d-flex justify-content-center align-items-center">Your cart is empty, please go back and add some stuff to your cart</p>
      )
    } else {
      let totalPrice = 0;
      const cartProducts = cart.map((product, index) => {
        totalPrice = totalPrice + product.totalPrice
        return (
          <div key={index.toString()} className="d-flex justify-content-around align-items-center mb-1">
            <p className="mb-0 checkout-cart-product-name">{product.product_name}</p>
            <p className="mb-0 checkout-cart-product-price">{product.price}</p>
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
              {this.state.isValid === false ? <p>All fields are required</p> : null}
              <form className="tab-pane fade show active checkout-div-one" id="pills-home" ref="userinfoform" role="tabpanel" aria-labelledby="pills-home-tab">
                <label htmlFor="fullname">Full Name</label>
                <input className="form-control form-control-log" type="text" id="fullname" ref="userinfofullname" required />
                <label htmlFor="email">Email</label>
                <input className="form-control form-control-log" type="email" id="email" ref="email" required />
                <label htmlFor="phone">PhoneNumber</label>
                <input className="form-control form-control-log" type="number" id="phone" ref="phone" required />
                <label htmlFor="street">Street Address</label>
                <input className="form-control form-control-log" type="text" id="street" ref="streetaddress" required />
                <label htmlFor="city">City</label>
                <input className="form-control form-control-log" type="text" id="city" ref="city" required />
                <label htmlFor="zipcode">Zip Code</label>
                <input className="form-control form-control-log" type="number" id="zipcode" ref="zipcode" required />
                <label htmlFor="country">Country</label>
                <input className="form-control form-control-log" type="text" id="country" ref="country" required />
              </form>
              <form className="tab-pane fade checkout-div-two" id="pills-profile" ref="cardinfoform" role="tabpanel" aria-labelledby="pills-profile-tab">
                <label htmlFor="card-name">Full Name</label>
                <input className="form-control mb-3 input-field-payment" type="text" id="card-name" ref="paymentfullname" required />
                <label htmlFor="card-number">Card Number</label>
                <input className="form-control mb-3 input-field-payment" type="number" id="card-number" ref="cardnumber" required />
                <span className="d-flex justify-content-between checkout-payment-title">
                  <label>Expiration</label>
                  <label>CVC</label>
                </span>
                <span className="d-flex justify-content-start">
                  <input className="form-control input-field-payment-myc" type="number" placeholder="MM" ref="cardinfomonth" required />
                  <input className="form-control input-field-payment-myc" type="number" placeholder="YYYY" ref="cardinfoyear" required />
                  <input className="form-control input-field-payment-myc" type="number" placeholder="cvc" ref="cardinfocvc" required />
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
              {!this.state.isValid ? cartProducts : null }
            </div>
            {this.state.isValid ? <p>Your order are send</p> : null}
            <div className="d-flex justify-content-between send-order-total">
              <button className="btn btn-success place-order-button" onClick={this.getInputValues.bind(this)}>Send Order</button>
              <p className="d-flex align-items-center mb-0">Total: ${!this.state.isValid ? totalPrice.toFixed(2) : 0}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(CheckOut);
