import { ADD_CIRCLE,
         LOADING_CIRCLES,
         LOADED_CIRCLES,
         LOADING_FAILED
       } from '../actions'
const defaultState = {
    loading: "Not Loading",
    list: []
}
const CirclesReducer = (state=defaultState, action) =>{
    switch(action.type){
    case ADD_CIRCLE:
        return {...state, loading: "Begin"}
    case LOADED_CIRCLES:
        return { list: action.payload, loading: "Loaded"}
    default: return state
    }
}
export default CirclesReducer
