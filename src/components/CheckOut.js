import React, { Component } from 'react';
import { connect } from 'react-redux';


class CheckOut extends Component {
  componentDidMount() {
    console.log('Checkout', this.props.cart.cart)
    console.log(this.props)
  }
  render() {
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
          <div className="tab-content d-flex justify-content-center" id="pills-TabContent">
            <form className="tab-pane fade show active checkout-div-one" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <label htmlFor="fullname">Full Name</label>
              <input className="form-control form-control-log" type="text" id="fullname" />
              <label htmlFor="email">Email</label>
              <input className="form-control form-control-log" type="email" id="email" />
              <label htmlFor="phone">PhoneNumber</label>
              <input className="form-control form-control-log" type="number" id="phone" />
              <label htmlFor="street">Street Address</label>
              <input className="form-control form-control-log" type="text" id="street" />
              <label htmlFor="city">City</label>
              <input className="form-control form-control-log" type="text" id="city" />
              <label htmlFor="zipcode">Zip Code</label>
              <input className="form-control form-control-log" type="number" id="zipcode" />
              <label htmlFor="country">Country</label>
              <input className="form-control form-control-log" type="text" id="country" />
            </form>
            <form className="tab-pane fade checkout-div-two" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <label htmlFor="card-name">Full Name</label>
              <input className="form-control mb-3 input-field-payment" type="text" id="card-name" />
              <label htmlFor="card-number">Card Number</label>
              <input className="form-control mb-3 input-field-payment" type="number" id="card-number" />
              <span className="d-flex justify-content-between checkout-payment-title">
                <label>Expiration</label>
                <label>CVC</label>
              </span>
              <span className="d-flex justify-content-start">
                <input className="form-control input-field-payment-myc" type="number" placeholder="MM" />
                <input className="form-control input-field-payment-myc" type="number" placeholder="YYYY" />
                <input className="form-control input-field-payment-myc" type="number" placeholder="cvc" />
              </span>
            </form>
          </div>
        </div>
        <div className="checkout-products d-flex flex-column justify-content-around">
          <div className="checkout-products-div">Produkter</div>
          <button className="btn btn-success place-order-button">Skicka</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(CheckOut);
