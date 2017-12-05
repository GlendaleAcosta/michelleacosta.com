import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import portfolioReducer from './portfolioReducer';

const reducers = combineReducers({
  loaderReducer,
  portfolioReducer
});

export default reducers;
