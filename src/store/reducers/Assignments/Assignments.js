import * as actionTypes from '../../actions/actionTypes'
const initialState = {
    // students:[
    //     {name:"Mike",
    //     completedAssignments:[{name:"Jonas",assignment:"10 pages of handwriting"}],
    //     inCompleteAssignments:[{name:"Jonas",assignment:"5 pages of handwriting"}]
    //     },
    //     {name:"Manu",
    //     completedAssignments:[{name:"Jonas",assignment:"10 pages of handwriting"}],
    //     inCompleteAssignments:[{name:"Jonas",assignment:"5 pages of handwriting"}]
    //     }


    // ],
    // teachers:[
    //     {name:"Jonas",
    //     assignments:["10 pages of handwriting"],
    //     },

    //     {name:"Mitchell",
    //     assignments:["2 pages of handwriting"],
    //     }
    //  ],
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_ASSIGNMENTS:
            
            let newState = {...action.val}
            return newState;
        case actionTypes.ADD_TEACHER_TO_ASSIGNMENT:
            
            return {
                ...action.value
            }
        case actionTypes.ADD_STUDENT_TO_ASSIGNMENT:
            return {
                ...action.value
            }

        default:
            return state;
    }
   
}

export default reducer;