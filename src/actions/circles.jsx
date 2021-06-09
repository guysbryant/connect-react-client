export const fetchCircles = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/circles', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(circles => {
                console.log(circles)
            this.setState({
                circles: circles,
                loading: false
            })
        })
        
    }
}
