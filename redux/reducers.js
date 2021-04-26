import { combineReducers } from 'redux';
import * as color from './color/reducers';

export default combineReducers({
  color:color.reducer,
})