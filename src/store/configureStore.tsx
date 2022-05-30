import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/cart';
import shopReducer from './reducers/shop';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
});
const confStore = () => {
  return createStore(rootReducer);
};
export default confStore;
