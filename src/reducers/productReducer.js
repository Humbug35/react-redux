import {
    FETCH_PRODUCTS_REQUEST ,
    FETCH_PRODUCTS_RECEIVE ,
    FETCH_PRODUCTS_FAIL ,
    FETCH_PRODUCTS_IN_CATEGORY_REQUEST ,
    FETCH_PRODUCTS_IN_CATEGORY_RECEIVE ,
    FETCH_PRODUCTS_IN_CATEGORY_FAIL
       } from '../actions/types';


const initialState = {
  products: [],
  error: null,
}
export const productsReducer = (state = initialState, action) => {
  state.products = []
  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
      }
    case FETCH_PRODUCTS_RECEIVE:
      return {
        ...state,
        products: action.products
      }
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload
      }
      case FETCH_PRODUCTS_IN_CATEGORY_REQUEST:
        return {
          ...state,
        }
      case FETCH_PRODUCTS_IN_CATEGORY_RECEIVE:
        return {
          ...state,
          products: action.products
        }
      case FETCH_PRODUCTS_IN_CATEGORY_FAIL:
        return {
          ...state,
          error: action.payload
        }
    default:
        return state
  }
}
