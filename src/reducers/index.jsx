import { combineReducers } from "redux"
import CirclesReducer from './circles'
import PostsReducer from './posts'

export default combineReducers({
    circles: CirclesReducer,
    posts: PostsReducer
})
