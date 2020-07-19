const initialState = {
    students:[
        //completedAssignments and incompleteAssignments
        // consists array of objects {nameOfTeacher:"...",assignment:"..."}
        {name:"Mike",completedAssignments:[],inCompleteAssignments:[]},


    ],
    teachers:[
        {nameOfTeacher:"Christine",assignments:["..."]}
    ],
}

const reducer = (state = initialState,action) => {
    return state;
}

export default reducer;