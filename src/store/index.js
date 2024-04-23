import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';

const rootReducer = combineReducers({
  getToken: tokenReducer,
  getComment: commentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
