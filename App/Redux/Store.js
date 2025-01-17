import Auth from './Reducers/Auth';
import Products from './Reducers/Products';

import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  Auth,
  Products,
});

const middleware = [thunk];
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(...middleware),
});

export default store;
