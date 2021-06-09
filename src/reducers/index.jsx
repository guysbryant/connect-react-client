import { combineReducers } from "redux"
import CirclesReducer from './circles'

export default combineReducers({
    circles: CirclesReducer
})
