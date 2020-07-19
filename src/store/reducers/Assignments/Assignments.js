import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    students:[
        {name:"Mike",
        completedAssignments:[{Jonas:"10 pages of handwriting"}],
        inCompleteAssignments:[{Jonas:"5 pages of handwriting"}]
        },


    ],
    teachers:[
        {name:"Jonas",assignments:["10 pages of handwriting"]},
        {name:"Mitchell",assignments:["2 pages of handwriting"]}
    ],
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_ASSIGNMENTS:
            
            let newState = {...action.val}
            return newState;
        default:
            return state;
    }
    return state;
}

export default reducer;