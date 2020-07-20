import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    Jonas: ["I'll be not attending class today"],
    Mitchell: ["Today is my birthday"]
}

const reducer = (state = initialState,action) => {

    switch(action.type) {
        case actionTypes.SET_NOTICES:
            
            let newState = {...action.val}
            return newState;
        default:
            return state;
    }

    
}

export default reducer;