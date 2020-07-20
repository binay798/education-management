import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    sentFeedbackByStudent:{
        Manu:[{teacher:"Mitchell",feedback: ["You should give us less assignments"]}],
        Mike:[{teacher: "Jonas",feedback: [" Your are a great teacher"]}],
        
    },
    ReceivedFeedbackByTeacher:{
        Jonas:[{student:"Mike",feedback: ["You are a great teacher"]}],
        Mitchell:[{student:"Manu",feedback: ["You should give us less homework"]}]
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_FEEDBACK:
            
            let newState = {
                ...state,
                sentFeedbackByStudent:action.sent,
                ReceivedFeedbackByTeacher:action.received
            }
            return newState;
        default:
            return state;
    }
   
}

export default reducer;