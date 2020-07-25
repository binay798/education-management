import React from 'react';
import classes from './teacherList.module.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'


const teacherList = props => {
    
    
    let teachers = props.teachers.map((teacher,id) => {
    return (
        <li key={id}>
            
            <NavLink activeClassName={classes.active} to={`/student/${teacher.username}`}>{teacher.username}-({teacher.subject})</NavLink>
        </li>
        )
    })
    return (
        <div className={classes.TeacherList}>
            <h2>Teacher list</h2>
            <ul>
                {teachers}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    
    return {
        teachers:state.user.teachers
    }

}

export default connect(mapStateToProps)(teacherList);