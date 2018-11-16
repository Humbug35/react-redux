import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(products => {
        const categories = products.map(product => product.Category)
        this.setState({
          categories: categories.filter((cat, index, array) => {
            return array.indexOf(cat) === index
          })
        })
      })
  }
  handleCheck(e) {
    let array = [];
    let checks = document.getElementsByTagName('input');
    for (let i = 0; i < checks.length; i++) {
      if(checks[i].checked) {
        array.push(checks[i].value)
      }
    }
    this.props.handleUrl(array)
  }
  clearFilter(e) {
    let checks = document.getElementsByTagName('input');
    for (let i = 0; i < checks.length; i++) {
      checks[i].checked = false;
    }
    this.props.handleUrl([])
  }
  render() {
    if(!this.state.categories) {
      return null
    }
    const categories = this.state.categories.map((box, index) => {
      return (
          <NavLink key={index.toString()} className="dropdown-item category-text" to={`/category/${box}`}>{box.charAt(0).toUpperCase() + box.substr(1)}</NavLink>
      )
    })
    return (
      <div className="mr-1 col-2 d-flex flex-column align-items-end categories">
        {categories}
      </div>
    )
  }
}
export default Categories;
