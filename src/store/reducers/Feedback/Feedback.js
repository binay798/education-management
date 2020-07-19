import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    sentFeedbackByStudent:{
        Manu:[{teacher:"Mitchell",feedback: ["You should give us less assignments"]}],
        Mike:[{teacher: "Jonas",feedback: ["Your voice is too low"]}],
        
    },
    ReceivedFeedbackByTeacher:{
        Jonas:[{student:"Mike",feedback: ["Your voice is too low"]}],
        Mitchell:[{student:"Manu",feedback: ["You should give us less homework"]}]
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_FEEDBACK:
            
            let newState = {...action.val}
            return newState;
        default:
            return state;
    }
    return state;
}

export default reducer;