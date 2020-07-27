import React from 'react';
import {connect} from 'react-redux';
import classes from './profile.module.css';
const profile = props => {
    let currentUser = null;
    props.users.forEach(user => {
        if(user.username === props.authenticatedUser) {
            currentUser = user
            
        }
    })

    
    return(
        <div className={classes.Profile}>
            <h2>Your Profile</h2>
            <p>Name: {currentUser.firstname} {currentUser.lastname}</p>
            <p>Age: {currentUser.age} </p>
            <p>Email: {currentUser.email} </p>
            <p>Contact: {currentUser.phoneNo} </p>
        </div>
        )
}

const mapStateToProps = state => {
    return {
        users:state.user.students,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}

export default connect(mapStateToProps)(profile);