import * as actionTypes from '../../actions/actionTypes'
const initialState = []


const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_FEEDBACK:
            
            return [...action.val]
        case actionTypes.SEND_FEEDBACK:

            console.log(action.value)
            return [
                ...action.value
            ]
        default:
            return state;
    }
   
}

export default reducer;