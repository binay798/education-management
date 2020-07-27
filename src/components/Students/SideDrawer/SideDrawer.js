import  React from "react";
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes'
import classes from "./SideDrawer.module.css";
import {NavLink} from 'react-router-dom'
const SideDrawer = props => {


    const show = () => {
        
        localStorage.setItem("name",null);
        localStorage.setItem("type",null)
        let newAuth = {
            ...props.auth,
            isAuthenticated:false,
            name:localStorage.getItem("name"),
            type:localStorage.getItem("type")
        }
        props.onLogout(newAuth)
    }
    return (
        <div className={classes.Sidedrawer}>
            <h2>Logo</h2>
            
            <ul className={classes.SidedrawerList}>
                <li><NavLink activeClassName={classes.active} to="/student/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/completedAssignments">Completed Assignments</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/incompleteAssignments">Incomplete Assignments</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/notices">Notices</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/student/feedback">Feedback</NavLink></li>
                <li><NavLink onClick={show} activeClassName={classes.active} to="/" exact>Logout</NavLink></li>
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