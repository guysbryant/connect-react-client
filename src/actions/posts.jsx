import { CREATED_POST } from '.'

export const createPost = (formData) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post: formData })
        })
            .then(response => {
                if (response.ok){
                    return response.json()
                }else{
                    return response.json().then(errors => Promise.reject(errors))
                }
            })
            .then(post =>{
                dispatch({
                    type: CREATED_POST,
                    payload: post
                })
            })
    }
}
