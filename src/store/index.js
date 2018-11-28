import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ordersReducer as orders } from '../reducers/ordersReducer';
import { categoryReducer as categories } from '../reducers/categoryReducer';
import { productsReducer as products } from '../reducers/productReducer';
import { cartReducer as cart } from '../reducers/cartReducer';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { composeWithDevTools } from 'redux-devtools-extension';




const rootReducer = combineReducers({
  orders,
  categories,
  products,
  cart
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
