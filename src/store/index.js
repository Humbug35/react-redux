import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ordersReducer as orders } from '../reducers/ordersReducer';
import { categoryReducer as categories } from '../reducers/categoryReducer';
import { productsReducer as products } from '../reducers/productReducer';
import { cartReducer as cart } from '../reducers/cartReducer';
import { adminLoginReducer as adminUser } from '../reducers/adminLoginReducer';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';




const rootReducer = combineReducers({
  orders,
  categories,
  products,
  cart,
  adminUser
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
