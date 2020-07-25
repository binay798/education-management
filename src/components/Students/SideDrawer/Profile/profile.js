import React from 'react';
import {connect} from 'react-redux'
const profile = props => {
    let currentUser = null;
    props.users.forEach(user => {
        if(user.name === props.authenticatedUser.name) {
            currentUser = user
            
        }
    })

    
    return(
        <div>
            <h2>Your Profile</h2>
            <p>Name: {currentUser.username}</p>
            <p>Age: {currentUser.age} </p>
            <p>Email: {currentUser.email} </p>
            <p>Phone: {currentUser.phoneNo} </p>
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