import  React from "react";

import classes from "./SideDrawer.module.css";
import {NavLink} from 'react-router-dom'
const sideDrawer = props => {

    return (
        <div>
            <h2>Logo</h2>
            <ul className={classes.SidedrawerList}>
                <li><NavLink activeClassName={classes.active} to="/student/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/completedAssignments">Completed Assignments</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/incompleteAssignments">Incomplete Assignments</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/notices">Notices</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/feedback">Feedback</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/" exact>Logout</NavLink></li>
            </ul>
        </div>
    )
}

export default sideDrawer;