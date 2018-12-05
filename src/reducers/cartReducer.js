import { ADD_TO_CART ,
        POST_ORDER_REQUEST ,
        POST_ORDER_SUCCESS ,
        POST_ORDER_FAIL } from '../actions/types';



const initialState = {
    cart: [],
    error: null
};



export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            cart: state.cart.concat(action.payload)
          }
        case POST_ORDER_REQUEST:
          return {
            ...state
          }
        case POST_ORDER_SUCCESS:
          return {
            ...state,
            cart: []
          }
        case POST_ORDER_FAIL:
          return {
            ...state,
            error: action.error
          }
        default:
          return state
  }
}
