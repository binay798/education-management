const axios = require('axios');

const initialState =[
    {studentName:"Mike",feedback:"You are a good teacher",teacherName:"Jonas"},
    {studentName:"binay6014",feedback:"You are a good teacher",teacherName:"Jonas"}

]

axios.put('https://education-project-1a678.firebaseio.com/feedbacks.json',initialState)
.then(res => console.log(res))
.catch(err => console.log(err));

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




