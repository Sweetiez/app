import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/cart';
import shopReducer from './reducers/shop';
import userReducer from './reducers/user';
import ordersReducer from './reducers/orders';

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
  orders: ordersReducer,
});
const confStore = () => {
  return createStore(rootReducer);
};
export default confStore;
