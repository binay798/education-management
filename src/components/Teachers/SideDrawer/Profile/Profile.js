import React from 'react';
import {connect} from 'react-redux'
const Profile = props => {
    console.log(props.profile)
    let user = null;
    props.profile.map(currentUser => {
        if(currentUser.name === props.authenticatedUser.name) {
            
            user = currentUser;
        }else {
            return null;
        }
    })
    let userJsx
    if(user !== null) {
        userJsx = (<div>
                        <p>Name: {user.username} </p>
                        <p>Age: {user.age} </p>
                        <p>Email: {user.email} </p>
                        <p>Phone: {user.phoneNo} </p>
                        <p>Subject: {user.subject} </p>
                    </div>)
    }else {
        userJsx = null
    }
    
    
    return (
        <div>
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