import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './reducers/cart';
import shopReducer from './reducers/shop';
import userReducer from './reducers/user';
import ordersReducer from './reducers/orders';
import recipesReducer from './reducers/recipes';
import eventReducer from './reducers/event';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  keyPrefix: '',
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  blacklist: [],
  // whitelist: ['user'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
  orders: ordersReducer,
  recipes: recipesReducer,
  event: eventReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
