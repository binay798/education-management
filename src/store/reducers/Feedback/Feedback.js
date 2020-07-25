import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    // Mike:[{teacher:"Jonas",feedbacks:[]}],
    // Manu:[{teacher:"Mitchell",feedbacks:[]}]
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_FEEDBACK:
            
            return state;
        default:
            return state;
    }
   
}

export default reducer;