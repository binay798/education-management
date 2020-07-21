import React from 'react';
import profile from '../../../assets/images/profile.png';
import classes from './Header.module.css';
import {connect} from 'react-redux'

const Header = (props) => {

    return (
        <div className={classes.Header}>
            <p>{props.authenticatedUser}</p>
            <img src={profile} alt="profile" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authenticatedUser:state.authenticatedUser.authenticatedUser
    }
}

export default connect(mapStateToProps)(Header);