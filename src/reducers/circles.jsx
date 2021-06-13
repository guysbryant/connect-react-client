import { ADD_CIRCLE,
         LOADING_CIRCLES,
         LOADED_CIRCLES,
         LOADING_FAILED,
         LOADED_CIRCLE,
         LOADED_CIRCLE_POSTS
       } from '../actions'

/* state.status options :
  Not Loading
  Loaded CirclesList
  Loaded Circle
  Loading Failed
  Begin Loading
*/
const defaultState = {
    status: "Not Loading",
    list: []
}
const CirclesReducer = (state=defaultState, action) =>{
    switch(action.type){
    case LOADING_CIRCLES:
        return {...state, status: "Begin Loading"}
    // case ADD_CIRCLE:
    //     return {...state, status: "Begin Loading"}
    case LOADED_CIRCLES:
        return {list: action.payload, status: "Finished Loading Circles"}
    case LOADED_CIRCLE :
        return {...state, list: action.payload, status: "Finished Loading Circle"}
    case LOADED_CIRCLE_POSTS:
        let circle = state.list.find(circle => circle.id == action.payload.circle.id)
        if(circle){
            return state
        }else{
            return {
                status: "Finished Loading Circle",
                list: [...state.list, action.payload.circle]
            }
        }
    default: return state
    }
}
export default CirclesReducer
