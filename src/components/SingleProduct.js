import React, { Component } from 'react';
import Categories from './Categories';
import { addToCart } from '../helpers/functions';


class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: null
    }
  }
  componentWillMount() {
    const productId = this.props.match.params.productId;
    fetch('http://localhost:5000/products/' + productId)
      .then(res => res.json())
      .then(product => {
        this.setState({
          product: product
        })
      })
  }
  handleSelectChange(event) {
    console.log(event.target.value)
  }
  render() {
    const product = this.state.product;
    if(!product) {
      return null
    }
    return (
      <div className="d-flex">
        <Categories />
        <div className="mt-5">
          <img className="single-product-img mt-5 pl-5" src="https://picsum.photos/200/100/?random" alt="product" />
        </div>
        <div className="container mt-5 ml-5 single-product-textcontent">
          <h3 className="mt-5">{product.product_name}</h3>
          <p className="mt-5">Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet,
          när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok.
          Lorem ipsum har inte bara överlevt fem århundraden,
          utan även övergången till elektronisk typografi utan större förändringar.
          Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-success mt-5 mr-5" onClick={addToCart.bind(this, product)}>Add To Cart</button>
            <input type="number" onChange={this.handleSelectChange.bind(this)} />st
            <p className="mt-5 single-product-price">{product.price}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SingleProduct;
