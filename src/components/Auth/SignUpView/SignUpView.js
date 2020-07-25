import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actionTypes from '../../../store/actions/actionTypes'

const SignUpView = props => {
    
    let newNoticeUsers = {
        ...props.notices
    }
    //All users object
    let newUsers = {
        ...props.users,
        students:[...props.users.students],
        teachers:[...props.users.teachers]
    }
    
    let newUserToAssignment = {
        ...props.assignments,
        students:[...props.assignments.students],
        teachers:[...props.assignments.teachers]
    }
    
    //state
    const [auth,setAuth] = React.useState({
        firstname:"",
        lastname:"",
        username:"",
        age: "",
        phoneNo:"",
        select:"student",
        email:"",
        password1:"",
        password2:"",
        
    })

    //subjects
    const [subject,setSubject] = React.useState({subject:""})
    const [loading,setLoading] = React.useState({loading:false})
    
    const [errMessage,setErrMessage] = React.useState({msg:null})
    const inputChangedHandler = (e) => {
        let newState = {
            ...auth,
            [e.target.name]:e.target.value
        }
        setAuth(newState)
    }

    const subjectChangeHandler = (e) => {
        let newState = {
            ...subject,
            subject:e.target.value
        }
        setSubject(newState)
    }


    const cleanUp = () => {
        
        let newAuth = {
            firstname:"",
            lastname:"",
            username:"",
            age: "",
            phoneNo:"",
            select:"student",
            email:"",
            password1:"",
            password2:"",
        }
        let newSubject = {
            subject:"",
        }
        setSubject(newSubject)
        setAuth(newAuth)
    }

    
   
    const sendRequest = (valid) => {
        if(valid) {
            let authData = {
                email:auth.email,
                password:auth.password2,
                returnSecureToken:true,
            }
            let userData = {
                firstname:auth.firstname,
                lastname:auth.lastname,
                username:auth.username,
                email:auth.email,
                age:auth.age,
                phoneNo:auth.phoneNo
            }
            
            
            let apiKey = 'AIzaSyCKYnQhCDF0qTvHWZPpEnaHgGKxybMkU6A'
                    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
                    axios.post(url,authData)
                    .then(res => {
                        
                        if(auth.select === "student") {
                            //send userData to store
                            let updatedNewUser = newUsers.students.concat(userData);
                            newUsers.students = updatedNewUser

                            let assignmentData = {
                                name:auth.username,
                                completedAssignments:[{name:"",assignment:""}],
                                inCompleteAssignments:[{name:"",assignment:""}]
                            }

                            



                            //Student user part
                            //adding new user to store
                            props.addStudent(newUsers)
            
                            //adding new user to firebase
                            axios.put(`https://education-project-1a678.firebaseio.com/users.json`,newUsers)
                            .then(res => {
                                //add assignment section to student 
                                let updatedNewUserToAssignment = newUserToAssignment.students.concat(assignmentData);
                                newUserToAssignment.students = updatedNewUserToAssignment;
                                props.addStudentToAssignment(newUserToAssignment)
                                axios.put(`https://education-project-1a678.firebaseio.com/assignments.json`,newUserToAssignment)
                                .then(res => {

                                    let authUser = {
                                        ...props.auth,
                                        name:auth.username,
                                        type:"student"
                                    }
                                    props.changeAuthenticatedUser(authUser)

                                    
                                    props.history.push('/student')
                                })
                                .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err));
                            
            
                            cleanUp()
                        }else if(auth.select === "teacher") {
                            userData["subject"] = subject.subject;
                            let updatedNewUser = newUsers.teachers.concat(userData);
                            newUsers.teachers = updatedNewUser;

                            let assignmentData = {
                                name:auth.username,
                                assignments:[""]
                            }
            
                            props.addTeacher(newUsers)
            
                            axios.put(`https://education-project-1a678.firebaseio.com/users.json`,newUsers)
                            .then(res => {
                                let updatedNewUserToAssignment = newUserToAssignment.teachers.concat(assignmentData);
                                newUserToAssignment.teachers = updatedNewUserToAssignment;
                                props.addTeacherToAssignment(newUserToAssignment)
                                axios.put(`https://education-project-1a678.firebaseio.com/assignments.json`,newUserToAssignment)
                                .then(res => {
                                    let authUser = {
                                        ...props.auth,
                                        name:auth.username,
                                        type:"teacher"
                                    }
                                    props.changeAuthenticatedUser(authUser)
                                    
                                    //adding user to notice
                                    let updatedNewNoticeUsers = {
                                        ...newNoticeUsers,
                                        [auth.username]:[""]
                                    }
                                    props.onAddingNotice(updatedNewNoticeUsers)
                                    axios.put(`https://education-project-1a678.firebaseio.com/notices.json`,updatedNewNoticeUsers)
                                    .then(res => {
                                        console.log(res)
                                        props.history.push('/teacher')
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    });

                                    
                                })
                                .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err));
                            
                            cleanUp()
                        }




                    } )
                    .catch(err => {
                        console.log(err.response.data.error.message);
                        setErrMessage({msg:err.response.data.error.message})
                        cleanUp()
                    });

            
                
                
            
            
            

            //send userDat to firebase









            
        }
    }
















    const submitHandler = (e) => {
        e.preventDefault()
        let valid = false
        for(let key in auth) {
            if(auth[key] !== "") {
                if(auth.password1 === auth.password2 && auth.password2 !== "" && auth.password2 !== "") {
                    valid = true;

                }else {
                    valid = false
                }
            }else {
                valid = false
            }
        }
        sendRequest(valid)
        
    }
    
    return (<div>
        <h2>SignUp</h2>
        <p style={{fontSize:"10px",color:"coral"}}>{errMessage.msg}</p>
        
        <form onSubmit={submitHandler}>
            <label>Firstname:</label><br/>
            <input name="firstname" autoComplete="off" onChange={inputChangedHandler} type="text" value={auth.firstname} /><br/>
            <label>Lastname:</label><br/>
            <input name="lastname" autoComplete="off" onChange={inputChangedHandler} value={auth.lastname} type="text" /><br/>
            <label>Username:</label><br/>
            <input name="username" autoComplete="off" onChange={inputChangedHandler} value={auth.username} type="text" /><br/>
            <label>Age:</label><br/>
            <input name="age" type="text" autoComplete="off" onChange={inputChangedHandler} value={auth.age} /><br/>
            <label>Contact no.:</label><br/>
            <input name="phoneNo" type="text" autoComplete="off" onChange={inputChangedHandler} value={auth.phoneNo} /><br/>
            <select name="select" onChange={inputChangedHandler} value={auth.select}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select><br/>
            { auth.select === "student" ? null : <><label>Subject:</label><br/>
            <input name="subject" onChange={subjectChangeHandler} type="text" /><br/></>}
            <label>Email:</label><br/>
            <input name="email" autoComplete="off" onChange={inputChangedHandler} value={auth.email} type="email" /><br/>
            <label>Password:</label><br/>
            <input name="password1" onChange={inputChangedHandler} value={auth.password1} type="password" /><br/>
            <label>Confirm Password</label><br/>
            <input name="password2" onChange={inputChangedHandler} value={auth.password2} type="password" /><br/>
            <button>{loading ? "Loading" : "Submit"}</button>
        </form>
        <p>Already has an account ? <Link to="/">Login</Link></p>
    </div>)
}

const mapStateToProps = state => {
    return {
        users:state.user,
        assignments:state.assignments,
        auth:state.authenticatedUser.authenticatedUser,
        notices:state.notice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTeacher:(teacher) => dispatch({type:actionTypes.ADD_TEACHER,value:teacher}),
        addStudent:(student) => dispatch({type:actionTypes.ADD_STUDENT,value:student}),
        addStudentToAssignment:(student) => dispatch({type:actionTypes.ADD_STUDENT_TO_ASSIGNMENT,value:student}),
        addTeacherToAssignment:(teacher) => dispatch({type:actionTypes.ADD_TEACHER_TO_ASSIGNMENT,value:teacher}),
        
        changeAuthenticatedUser:(user) => dispatch({type:actionTypes.CHANGE_AUTH_USER,value:user}),
        onAddingNotice:(users) => dispatch({type:actionTypes.ADD_NOTICE,value:users})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignUpView));

