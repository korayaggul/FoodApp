import { combineReducers } from 'redux';
import * as color from './color/reducers';
import * as style from './theme/reducers'

export default combineReducers({
  color:color.reducer,
  style:style.reducer,
})