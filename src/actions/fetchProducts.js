import {
         FETCH_PRODUCTS_REQUEST ,
         FETCH_PRODUCTS_RECEIVE ,
         FETCH_PRODUCTS_FAIL ,
         FETCH_PRODUCTS_IN_CATEGORY_RECEIVE ,
         FETCH_PRODUCTS_IN_CATEGORY_FAIL
  } from './types';


export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
})

export const fetchProductsReceive = products => ({
  type: FETCH_PRODUCTS_RECEIVE,
  products
})

export const fetchProductsFail = error => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: error
})

export const fetchCategoryProductsReceive = products => ({
  type: FETCH_PRODUCTS_IN_CATEGORY_RECEIVE,
  products
})

export const fetchCategoryProductsFail = error => ({
  type: FETCH_PRODUCTS_IN_CATEGORY_FAIL,
  payload: error
})



export const fetchProducts = (productId = '', query = '') => {
  return dispatch => {
    dispatch(fetchProductsRequest())
    if(query.includes('?category=')) {
      return fetch('http://localhost:5000/products' + query)
        .then(res => res.json())
        .then(categoryProducts => {
          dispatch(fetchCategoryProductsReceive(categoryProducts))
        })
        .catch(error => {
          dispatch(fetchCategoryProductsFail(error))
        })
    } else {
      return fetch('http://localhost:5000/products/'+productId)
        .then(res => res.json())
        .then(products => {
          if(productId === '') {
            let frontPageProducts = [];
            let frontPagerOne = products[Math.floor(Math.random() * products.length)]
            let frontPageTwo = products[Math.floor(Math.random() * products.length)]
            let frontPageThree = products[Math.floor(Math.random() * products.length)]
            let frontPageFour = products[Math.floor(Math.random() * products.length)]
            let frontPageFive = products[Math.floor(Math.random() * products.length)]
            let frontPageSix = products[Math.floor(Math.random() * products.length)]
            frontPageProducts.push(frontPagerOne, frontPageTwo, frontPageThree, frontPageFour, frontPageFive, frontPageSix)
              dispatch(fetchProductsReceive(frontPageProducts))
          } else {
            dispatch(fetchProductsReceive(products))
          }
        })
        .catch(error => {
          dispatch(fetchProductsFail(error))
        })
    }
  }
}
