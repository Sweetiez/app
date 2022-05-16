import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/cart';
import shopReducer from './reducers/shop';

const rootReducer = combineReducers({cart: cartReducer, shop: shopReducer});
const confStore = () => {
  return createStore(rootReducer);
};
export default confStore;
