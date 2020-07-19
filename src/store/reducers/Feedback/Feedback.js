const initialState = {
    sentFeedbackByStudent:{
        nameOfStudent:[{teacher:"",feedback:["..."]}],
        
    },
    ReceivedFeedbackByTeacher:{
        nameOfTeacher:[{student:"",feedback:["..."]}],
        
    }
}

const reducer = (state = initialState,action) => {
    return state;
}

export default reducer;