import { LOADING_CIRCLES,
         LOADED_CIRCLES,
         LOADING_CIRCLE,
         LOADED_CIRCLE,
         LOADED_CIRCLE_POSTS,
         CREATED_CIRCLE,
         ERROR_CREATING_CIRCLE,
         UPDATE_CIRCLE
       } from './'

export const updateCircle = (url, formData) => {
    return(dispatch) => {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({circle: formData}),
        })
            .then(response => response.json())
            .then(circle => {
                dispatch({type: UPDATE_CIRCLE,
                          payload: circle})
            })
    }
}

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

    export const createCircle = (formData) => {
        return (dispatch) => {
            return fetch('http://localhost:3001/circles', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({circle: formData})
            })
                .then(response => {
                    if (response.ok){
                        return response.json()
                    }else{
                        return response.json().then(errors => Promise.reject(errors))
                    }
                })
                .then(circle => {
                    dispatch({ type: CREATED_CIRCLE,
                               payload: circle})
                })
        }
    }
