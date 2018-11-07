import { FETCH_ORDERS ,
         FETCH_ORDERS_BEGIN ,
         FETCH_ORDERS_SUCCESS ,
         FETCH_ORDERS_FAILURE ,
         FETCH_SINGLE_ORDER } from '../actions/types';


const initialState = {
  orders: [],
  singleOrder: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ORDERS:
        return {
          ...state,
          orders: action.payload
        }
    case FETCH_SINGLE_ORDER:
        return {
          ...state,
          singleOrder: action.payload
        }
    default:
          return state;
  }
}
