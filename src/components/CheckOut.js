import React, { Component } from 'react';
import { connect } from 'react-redux';


class CheckOut extends Component {
  componentDidMount() {
    console.log('Checkout', this.props.cart.cart)
    console.log(this.props)
  }
  render() {
    return (
      <div>CheckOut</div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(CheckOut);
