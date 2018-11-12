import { FETCH_ORDERS_REQUEST ,
         FETCH_ORDERS_RECEIVE ,
         FETCH_ORDERS_FAIL ,
         FETCH_SINGLE_ORDER_REQUEST ,
         FETCH_SINGLE_ORDER_RECEIVE ,
         FETCH_SINGLE_ORDER_FAIL } from '../actions/types';


const initialState = {
  orders: [],
  isFetching: false,
  error: null,
  singleOrder: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ORDERS_REQUEST:
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
    case FETCH_SINGLE_ORDER_REQUEST:
      state.singleOrder = []
      return {
      ...state
    }
    case FETCH_SINGLE_ORDER_RECEIVE:
      return {
        ...state,
        singleOrder: action.payload
      }
    case FETCH_SINGLE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
          return state;
  }
}
