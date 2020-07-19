const axios = require('axios');

let ReceivedFeedbackByTeacher = {
    Jonas:[{student:"Mike",feedback:["Your voice is too low"]}],
    Mitchell:[{student:"",feedback:["You should give us less homework"]}],
}

axios.put('https://education-project-1a678.firebaseio.com/receivedFeedbackByTeacher.json',ReceivedFeedbackByTeacher)
.then(res => console.log(res));

const state = {
    //assignments
    assignments:{
        students:[
            //completedAssignments and incompleteAssignments
            // consists array of objects {nameOfTeacher:"...",assignment:"..."}
            {name:"Mike",completedAssignments:[],inCompleteAssignments:[]},
    
    
        ],
        teachers:[
            {nameOfTeacher:"Christine",assignments:["..."]}
        ],
    },
    //authenticated user//not stored at firebase
    //It is handled locally
    authenticatedUser:"Mike",
    //feedback
    sentFeedbackByStudent:{
        nameOfStudent:[{teacher:"",feedback:["..."]}],
        nameOfStudent:[{teacher:"",feedback:["..."]}],
    },
    ReceivedFeedbackByTeacher:{
        nameOfTeacher:[{student:"",feedback:["..."]}],
        nameOfTeacher:[{student:"",feedback:["..."]}],
    },
    //notices
    teacherName:["..."],
    teacherName:["..."],

}