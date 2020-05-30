import {combineReducers} from 'redux'
import Reducer from './TodoReducer'

export default combineReducers({
  todo: Reducer,

});
