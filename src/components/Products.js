import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';
import { filterArray, addToCart } from '../helpers/functions';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  getProducts(query = '') {
      return fetch('http://localhost:5000/products' + query)
        .then(res => res.json())
        .then(products => {
          this.setState({
            products: products
          })
        })
  }
  componentWillMount() {
    this.getProducts()
  }
  getUrl(array) {
    const sortUrl = filterArray(array)
    this.getProducts(sortUrl)
  }

  // handleCheck(e) {
  //   let array = [];
  //   let checks = document.getElementsByTagName('input');
  //   for (let i = 0; i < checks.length; i++) {
  //     if(checks[i].checked) {
  //       array.push(checks[i].value)
  //     }
  //   }
  //   this.getUrl(array)
  // }
  // clearFilter(e) {
  //   let checks = document.getElementsByTagName('input');
  //   for (let i = 0; i < checks.length; i++) {
  //     checks[i].checked = false;
  //   }
  //   this.getUrl([])
  // }


  render() {
    if(!this.state.products) {
      return null
    }
    let bestSellerProducts = [];
    let bestSellerOne = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    let bestSellerTwo = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    let bestSellerThree = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    let bestSellerFour = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    let bestSellerFive = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    let bestSellerSix = this.state.products[Math.floor(Math.random() * this.state.products.length)]
    bestSellerProducts.push(bestSellerOne, bestSellerTwo, bestSellerThree, bestSellerFour, bestSellerFive, bestSellerSix)
    if(bestSellerProducts[0] === undefined) {
      return null
    }
    let bestSellers = bestSellerProducts.map((product, index) => {
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
      <div>
        <div className="d-flex">
            <Categories handleUrl={this.getUrl.bind(this)} />
            <div className="products-div mt-5 d-flex flex-wrap justify-content-center col-7">
              {bestSellers}
            </div>
      </div>
    </div>
    )
  }
}
export default ProductList;
