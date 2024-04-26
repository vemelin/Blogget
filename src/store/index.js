import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMidleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {thunk} from 'redux-thunk';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  getToken: tokenReducer,
  getComment: commentReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMidleware, thunk))
);
