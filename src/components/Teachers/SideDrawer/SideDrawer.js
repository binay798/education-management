import React from 'react';
import classes from './SideDrawer.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actionTypes from '../../../store/actions/actionTypes';

const SideDrawer = props => {

    const logout = () => {
        localStorage.setItem("name",null);
        localStorage.setItem("type",null)
        let newAuth = {
            ...props.auth,
            isAuthenticated:false,
            name:localStorage.getItem("name"),
            type:localStorage.getItem("type")
        }
        props.onLogout(newAuth)
        return null;
    }

    return (
        <div className={classes.Sidedrawer}>
            <h2>Logo</h2>
            <ul>
                <li><NavLink to="/teacher/profile">Profile</NavLink></li>
                <li><NavLink to="/teacher/postAssignments">Post Assignments</NavLink></li>
                <li><NavLink to="/teacher/receivedAssignments">Received Assignments</NavLink></li>
                <li><NavLink to="/teacher/sendNotices">Send Notices</NavLink></li>
                <li><NavLink onClick={logout} to="/">Logout</NavLink></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth:state.authenticatedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout:(val) => dispatch({type:actionTypes.LOGOUT,value:val})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideDrawer);