import { LOADING_CIRCLES, LOADED_CIRCLES, LOADING_CIRCLE, LOADED_CIRCLE, LOADED_CIRCLE_POSTS} from './'
export const fetchCircles = () => {
    return (dispatch) => {
        dispatch({type: LOADING_CIRCLES})
        fetch('http://localhost:3001/circles', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(circles => {
                dispatch({
                    type: LOADED_CIRCLES,
                    payload: circles
                })
        })
    }
}

export const fetchCircle = (circleId) => {
    return (dispatch) => {
        dispatch({type: LOADING_CIRCLE, payload: circleId})
        fetch(`http://localhost:3001/circles/${circleId}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((circlePosts) =>{
                dispatch({
                    type: LOADED_CIRCLE_POSTS,
                    payload: circlePosts
                })
        })
    }
}
