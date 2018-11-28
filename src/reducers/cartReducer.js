import { ADD_TO_CART } from '../actions/types';



const initialState = {
    cart: []
};



export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            cart: state.cart.concat(action.payload)
          }
    default:
      return state
  }
}
