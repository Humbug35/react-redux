import { combineReducers } from 'redux';
import ordersReducer from './ordersReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  orders: ordersReducer,
  registerLogin: authReducer
})
