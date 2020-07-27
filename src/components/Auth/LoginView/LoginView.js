import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actionTypes from '../../../store/actions/actionTypes'
const LoginView = props => {
    let studentArray = props.users.students;
    let teacherArray = props.users.teachers;
    

    //search email
    //let loginUser = null;
    
    //loading effect
    const [loading,setLoading] = React.useState(false)
    const [auth,setAuth] = React.useState({
        email:"",
        password:"",
    })
    
    const updatedUser = {
        ...props.auth
    }

    const searchEmail = (em) => {
        
        //Search in student's data
        studentArray.forEach(item => {
            if(item.email === em) {
                
                localStorage.setItem("name",item.username);
                localStorage.setItem("type","student")

                updatedUser.name = localStorage.getItem("name");
                updatedUser.type = "student";
                updatedUser.isAuthenticated = true;
                props.onChangeUser(updatedUser)
                props.history.push('/student')
                
            }
        })

        //Search in teacher's data
        teacherArray.forEach(item => {
            if(item.email === em) {
                
                localStorage.setItem("name",item.username);
                localStorage.setItem("type","teacher");
                updatedUser.name = localStorage.getItem("name");
                updatedUser.type = "teacher";
                updatedUser.isAuthenticated = true;
                props.onChangeUser(updatedUser)
                props.history.push('/teacher')
                
            }
        })
    }
    const inputChangeHandler = (e) => {
        let newState = {
            ...auth,
            [e.target.name]:e.target.value,
        }
        setAuth(newState)
        
        
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        if(auth.email !== "" && auth.password !== "") {
            let authData = {
                email:auth.email,
                password:auth.password,
                returnSecureToken:true,
            }
            let apiKey = 'AIzaSyCKYnQhCDF0qTvHWZPpEnaHgGKxybMkU6A';
            let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
            axios.post(url,authData)
            .then(res => {
                
                searchEmail(res.data.email)  
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            });
        }else {
            setLoading(false)
        }
        
    }
    
    return (<div>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <label>Email</label><br/>
            <input name="email" autoComplete="off" onChange={inputChangeHandler} value={auth.email} type="email" /><br/>
            <label>Password</label><br/>
            <input name="password" autoComplete="off" onChange={inputChangeHandler} value={auth.password} type="password" /><br/>
            <button >{loading ? "Loading..." : "Submit"}</button>
        </form>
        <p>No account ? <Link to="/signup">Signup</Link></p>
    </div>)
}

const mapStateToProps = state => {
    return {
        users:state.user,
        auth:state.authenticatedUser.authenticatedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeUser:(user) => dispatch({type:actionTypes.CHANGE_AUTH_USER,value:user})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginView));