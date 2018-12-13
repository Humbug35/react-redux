import { FETCH_ORDERS_REQUEST ,
         FETCH_ORDERS_RECEIVE ,
         FETCH_ORDERS_FAIL ,
         POST_ORDER_REQUEST ,
         POST_ORDER_SUCCESS ,
         POST_ORDER_FAIL
         } from './types';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST
})

export const fetchOrdersReceive = orders => ({
  type: FETCH_ORDERS_RECEIVE,
  payload: orders
})

export const fetchOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload: error
})

export const postOrderRequest = () => ({
  type: POST_ORDER_REQUEST
})

export const postOrderSuccess = order => ({
  type: POST_ORDER_SUCCESS,
  order,
  orderId: order.orderId
})

export const postOrderFail = error => ({
  type: POST_ORDER_FAIL,
  error
})

export const fetchOrders = (orderId = '') => {
  return dispatch => {
    dispatch(fetchOrdersRequest())
    return fetch('http://localhost:5000/orders/'+orderId)
      .then(res => res.json())
      .then(orders => {
        dispatch(fetchOrdersReceive(orders))
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error))
      })
    }
  }

  export const postOrder = (order) => {
    return dispatch => {
      dispatch(postOrderRequest())
      return fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(order => {
        dispatch(postOrderSuccess(order))
      })
      .catch(error => {
        dispatch(postOrderFail(error))
      })
    }
  }
