import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';
import { NavLink } from 'react-router-dom';

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts('', '?category=' + this.props.match.params.category))
  }

componentDidUpdate (prevProps) {
  let oldCategory = prevProps.match.params.category
  let newCategory = this.props.match.params.category
  if (newCategory !== oldCategory) {
    this.props.dispatch(fetchProducts('', '?category=' + this.props.match.params.category))
  }
}
  render() {
    if(this.props.categoryProducts.products.length === 0 || !Array.isArray(this.props.categoryProducts.products)) {
      return null
    }
    const categoryTitle = this.props.match.params.category;
    const products = this.props.categoryProducts.products.map((product, index) => {
      return (
        <div className="card col-3 offset-1 mb-5 product-card" key={index.toString()}>
          <NavLink to={"/products/" + product._id} className="card-body product-card product-card-body">
            <img className="card-img-top product-card-img" src="https://picsum.photos/200/300/?random" alt="product" />
            <div className="d-flex flex-column">
              <h5 className="card-title product-card-text">{product.product_name}</h5>
              <p className="card-text product-card-text">Category: {product.Category.charAt(0).toUpperCase() + product.Category.substr(1)}</p>
              <p className="card-text product-card-text">Price: {product.price}</p>
            </div>
          </NavLink>
        </div>
      )
    })
    return (
            <div className="d-flex flex-column align-items-center justify-content-start col-12">
              <h3 className="mt-4 d-flex justify-content-center">{categoryTitle.charAt(0).toUpperCase() + categoryTitle.substr(1)}</h3>
              <div className="mt-5 d-flex flex-wrap col-9 products-div">
                {products}
              </div>
            </div>
    )
  }
}

const mapStateToProps = state => ({
  categoryProducts: state.products
})
export default connect(mapStateToProps)(Category);
