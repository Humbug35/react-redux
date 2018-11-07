import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ordersReducer from '../reducers/ordersReducer';

const store = createStore(ordersReducer, applyMiddleware(thunk))


export default store;
