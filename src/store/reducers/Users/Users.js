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

const reducer = (state = initialState,action) => {
    return state
}
export default reducer;