import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../actions/fetchCategories';
import { NavLink } from 'react-router-dom';


class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategory())
  }
  render() {
    const { categories } = this.props.navigation;
    if(categories.length === 0) {
      return null
    }
    const categoryLinks = categories.map((cat, index) => {
      return <NavLink key={index.toString()} className="dropdown-item db-categories-links" exact to={`/category/${cat}`}>{cat.charAt(0).toUpperCase() + cat.substr(1)}</NavLink>
    })
    return (
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {categoryLinks}
          </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  navigation: state.categories
})
export default connect(mapStateToProps)(Categories);
