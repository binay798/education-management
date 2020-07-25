import React from 'react';
import profile from '../../../assets/images/profile.png'
import classes from './header.module.css';
import {connect} from 'react-redux'

const header = props => {
    
    return(
        <div className={classes.Header}>
            <h1>Student Dashboard</h1>
            <div style={{display:"flex",alignItems:"center",marginLeft:"auto"}}>
                <p>{props.authenticatedUser}</p>
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    
    return {
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }

}

export default connect(mapStateToProps)(header);