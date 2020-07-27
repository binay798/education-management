import React from 'react';
import {connect} from 'react-redux';
import classes from './Profile.module.css';


const Profile = props => {
    
    let user = null;
    props.profile.map(currentUser => {
        
        if(currentUser.username === props.authenticatedUser) {
            
            user = currentUser;
            return null;
        }else {
            return null;
        }
    })
    let userJsx;
    if(user !== null) {
        userJsx = (<div>
                        <p>Name: {user.firstname} {user.lastname} </p>
                        <p>Age: {user.age} </p>
                        <p>Email: {user.email} </p>
                        <p>Phone: {user.phoneNo} </p>
                        <p>Subject: {user.subject} </p>
                    </div>)
    }else {
        userJsx = null
    }
    
    
    return (
        <div className={classes.Profile}>
            <h2>Profile</h2>
            {userJsx}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        profile:state.user.teachers,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}

export default connect(mapStateToProps)(Profile);