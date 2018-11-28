import { FETCH_ORDERS_REQUEST ,
         FETCH_ORDERS_RECEIVE ,
         FETCH_ORDERS_FAIL } from '../actions/types';



const initialState = {
  orders: [],
  isFetching: false,
  error: null,
}

export const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ORDERS_REQUEST:
      state.orders = []
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ORDERS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        orders: action.payload
      }
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
          return state;
  }
}
