import React from 'react';
import classes from './SideDrawer.module.css';
import {NavLink} from 'react-router-dom'
const sideDrawer = props => {
    return (
        <div className={classes.Sidedrawer}>
            <h2>Logo</h2>
            <ul>
                <li><NavLink to="/teacher/profile">Profile</NavLink></li>
                <li><NavLink to="/teacher/postAssignments">Post Assignments</NavLink></li>
                <li><NavLink to="/teacher/receivedAssignments">Received Assignments</NavLink></li>
                <li><NavLink to="/teacher/sendNotices">Send Notices</NavLink></li>
                <li><NavLink to="/teacher/logout">Logout</NavLink></li>
            </ul>
        </div>
    )
}

export default sideDrawer;