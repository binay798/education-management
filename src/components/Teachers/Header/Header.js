import React from 'react';
import profile from '../../../assets/images/profile.png';
import classes from './Header.module.css';
import {connect} from 'react-redux'

const Header = (props) => {

    return (
        <div className={classes.Header}>
            <h1>Teacher Dashboard</h1>
            <p>{props.authenticatedUser}</p>
            <img src={profile} alt="profile" />
        </div>
    )
    
}

const mapStateToProps = state => {

    return {
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }

}

export default connect(mapStateToProps)(Header);