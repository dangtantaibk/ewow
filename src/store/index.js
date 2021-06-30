import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import UserReducer from './user/slide';

const middleware = [thunk];
const rootReducer = {
  User: UserReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
