import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';
import { NavLink } from 'react-router-dom';

class ProductList extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: []
  //   }
  // }
  // getProducts(query = '') {
  //   // Fetchen ska ersättas med dispatch
  //     return fetch('http://localhost:5000/products' + query)
  //       .then(res => res.json())
  //       .then(products => {
  //         this.setState({
  //           products: products
  //         })
  //       })
  // }
  componentWillMount() {
    //this.getProducts()
    this.props.dispatch(fetchProducts())
  }

  render() {
    if(this.props.products.products.length === 0) {
      return null
    }
    let bestSellers = this.props.products.products.map((product, index) => {
      let replaceDollar = product.price.replace('$', '');
      let newPrice = Number(replaceDollar);
      return (
        <div className="card col-3 offset-1 mb-5 product-card" key={index.toString()}>
          <NavLink to={"/products/" + product._id} className="card-body product-card">
            <img className="card-img-top product-card-img" src="https://picsum.photos/200/300/?random" alt="product" />
            <h5 className="card-title product-card-text">{product.product_name}</h5>
            <p className="card-text product-card-text">Category: {product.Category.charAt(0).toUpperCase() + product.Category.substr(1)}</p>
            <p className="card-text product-card-text">Price: ${newPrice}</p>
          </NavLink>
        </div>
      )
    })
    // const products = this.state.products.map(product => {
    //   let replaceDollar = product.price.replace('$', '');
    //   let newPrice = Number(replaceDollar);
    //   return (
    //     <div className="card col-3 offset-1 mb-5 product-card" key={product._id}>
    //       <NavLink to="/About" className="card-body product-card">
    //         <img className="card-img-top product-card-img" src="https://picsum.photos/200/300/?random" alt="product" />
    //         <h5 className="card-title product-card-text">{product.product_name}</h5>
    //         <p className="card-text product-card-text">Category: {product.Category.charAt(0).toUpperCase() + product.Category.substr(1)}</p>
    //         <p className="card-text product-card-text">Price: ${newPrice}</p>
    //       </NavLink>
    //       <div className="d-flex justify-content-end pt-2 container">
    //         <button className="btn btn-success" onClick={addToCart.bind(this, product)}>Add To Cart</button>
    //       </div>
    //     </div>
    //   )
    // })

    return (
            <div className="products-div mt-5 d-flex flex-wrap col-9">
              {bestSellers}
            </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
})
export default connect(mapStateToProps)(ProductList);
