import React from 'react';
import classes from './teacherList.module.css';
import {connect} from 'react-redux';
import {Route,Link} from 'react-router-dom'
import TeacherInfo from '../teacherInfo';

const teacherList = props => {
    
    let teachers = props.teachers.map((teacher,id) => {
    return (
        <li key={id}>
            
            <Link to={`/student/${teacher.name}`}>{teacher.name}-({teacher.subject})</Link>
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