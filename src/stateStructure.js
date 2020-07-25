const axios = require('axios');

const initialState =[
    {name:"Mike",
    completedAssignments:[{name:"Jonas",assignment:"10 pages of handwriting"}],
    inCompleteAssignments:[{name:"Jonas",assignment:"5 pages of handwriting"}]
    },
    {name:"Manu",
    completedAssignments:[{name:"Jonas",assignment:"10 pages of handwriting"}],
    inCompleteAssignments:[{name:"Jonas",assignment:"5 pages of handwriting"}]
    }


]

axios.put('https://education-project-1a678.firebaseio.com/assignments/students.json',initialState)
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




