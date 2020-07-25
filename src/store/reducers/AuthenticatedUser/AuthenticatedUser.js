import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    authenticatedUser:{
        type:"teacher",
        name:"Jonas"
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.AUTH_STUDENT:
            return {
                ...state,
                authenticatedUser:{
                    ...state.authenticatedUser,
                    type:"student",
                    name:"Mike"
                }
            }
            case actionTypes.AUTH_TEACHER:
                return {
                    ...state,
                    authenticatedUser:{
                        ...state.authenticatedUser,
                        type:"teacher",
                        name:"Jonas"
                    }
                }
                case actionTypes.CHANGE_AUTH_USER:
                    
                    return {
                        ...state,
                        authenticatedUser:{
                            ...action.value
                        }
                    };
        default:
            return state;
    }

    
}

export default reducer;