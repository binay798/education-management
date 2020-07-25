import * as actionTypes from '../../actions/actionTypes';
const initialState = {
    // students:[
    //     {name:"Mike",age:19,email:"mike@gmail.com",phoneNo:7845668},
    //     {name:"Manu",age:20,email:"manu@gmail.com",phoneNo:7845668},
    // ],
    // teachers:[
    //     {name:"Jonas",age:26,email:"jonas@gmail.com",phoneNo:7845668,subject:"Math"},
    //     {name:"Mitchell",age:23,email:"mitchell@gmail.com",phoneNo:7845668,subject:"Physics"},
    // ]
}

const reducer = (state = initialState,action) => {
    
    switch(action.type) {
        case actionTypes.SET_USERS:
            console.log(action.val)
            let newState = {...action.val}
            return newState;
        case actionTypes.ADD_STUDENT:
            return {
                ...action.value
            }
        case actionTypes.ADD_TEACHER:
            return {
                ...action.value
            }
        default:
            return state;
    }
    

}
export default reducer;