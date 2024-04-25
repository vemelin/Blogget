import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMidleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  getToken: tokenReducer,
  getComment: commentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMidleware, thunk))
);
