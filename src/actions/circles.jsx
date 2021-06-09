import { LOADING_CIRCLES, LOADED_CIRCLES } from './'
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
