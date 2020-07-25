import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    started:false
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.STARTED:
        return {
            ...state,
            started:true
        }
        default:
            return state
    }
    

    
}
export default reducer