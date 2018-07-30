import { combineReducers } from 'redux';
import categories from './category';
import cards from './card';

// this combineReducers method defines the shape of our store
export default combineReducers({
  categories,
  cards,
});
