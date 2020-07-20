import  React from "react";

import classes from "./SideDrawer.module.css";
import {Link} from 'react-router-dom'
const sideDrawer = props => {

    return (
        <div>
            <h2>Logo</h2>
            <ul className={classes.SidedrawerList}>
                <li><Link to="/student/profile">Profile</Link></li>
                <li><Link to="/student/completedAssignments">Completed Assignments</Link></li>
                <li><Link to="/student/incompleteAssignments">Incomplete Assignments</Link></li>
                <li><Link to="/student/notices">Notices</Link></li>
                <li><Link to="/student/feedback">Feedback</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    )
}

export default sideDrawer;