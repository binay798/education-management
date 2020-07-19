const axios = require('axios');

const initialState = {
    students:[
        {name:"Mike",age:19,email:"mike@gmail.com",phoneNo:7845668},
        {name:"Manu",age:20,email:"manu@gmail.com",phoneNo:7845668},
    ],
    teachers:[
        {name:"Jonas",age:26,email:"jonas@gmail.com",phoneNo:7845668},
        {name:"Mitchell",age:23,email:"mitchell@gmail.com",phoneNo:7845668},
    ]
}

axios.put('https://education-project-1a678.firebaseio.com/users.json',initialState)
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




