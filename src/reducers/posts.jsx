import {
    LOADING_CIRCLE_POSTS,
    LOADED_CIRCLE_POSTS,
    LOADING_CIRCLE,
    CREATED_POST
} from '../actions'

const initialState = {
    circlesLoaded: {},
    list: []
}

export default function postReducer(state = initialState,
                                    action){
    switch(action.type){
    case LOADING_CIRCLE:
        return {
            ...state,
            circlesLoaded: {...state.circlesLoaded, [action.payload]: 'Loading'}
        }
    case LOADED_CIRCLE_POSTS:
        return{
            circlesLoaded: {
                ...state.circlesLoaded,
                [action.payload.circle.id]: 'Loaded',
            },
            list: action.payload.posts
        }
        CREATED_POST:
        return{
            ...state,
            list: [...state.list, action.payload]
        }
    default:
        return state
    }
}
