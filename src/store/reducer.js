import { combineReducers } from 'redux'
import {configurReducer} from './configur.reducer'


const createReducer = asyncReducers => combineReducers({
  configur: configurReducer,
  ...asyncReducers
})


export default createReducer
