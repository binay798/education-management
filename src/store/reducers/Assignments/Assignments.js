import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    students:[
        {name:"Mike",
        completedAssignments:[{Jonas:"10 pages of handwriting"}],
        inCompleteAssignments:[{Jonas:"5 pages of handwriting"}]},


    ],
    teachers:[
        {nameOfTeacher:"Christine",assignments:["..."]}
    ],
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_ASSIGNMENTS:
            return {
                ...action.val
                
            }
    }
    return state;
}

export default reducer;