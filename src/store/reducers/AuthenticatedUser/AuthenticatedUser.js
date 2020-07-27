import * as actionTypes from '../../actions/actionTypes';
const initialState = {
    authenticatedUser:{
        type:localStorage.getItem("type"),
        name:localStorage.getItem("name")
    },
    isAuthenticated:false
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
    
            case actionTypes.CHANGE_AUTH_USER:
                    
                return {
                    ...state,
                    authenticatedUser:{
                        ...action.value
                    }
                };
            case actionTypes.LOGOUT:
                return {
                    ...action.value
                }
        default:
            return state;
    }

    
}

export default reducer;