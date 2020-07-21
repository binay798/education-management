import React from 'react';
import {connect} from 'react-redux'
const profile = props => {
    
    let user = null;
    props.profile.map(currentUser => {
        if(currentUser.name === props.authenticatedUser) {
            
            user = currentUser;
        }else {
            return null;
        }
    })
    let userJsx
    if(user !== null) {
        userJsx = (<div>
                        <p>Name: {user.name} </p>
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
        authenticatedUser:state.authenticatedUser.authenticatedUser
    }
}

export default connect(mapStateToProps)(profile);