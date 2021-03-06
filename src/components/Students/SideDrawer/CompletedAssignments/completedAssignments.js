import React from 'react';
import {connect} from 'react-redux';
import classes from './completedAssignments.module.css';
const completedAssignments = props => {
    
    let assignments = [...props.assignments]
    .map(assignment => {
        if(assignment.name === props.authenticatedUser) {
            return assignment.completedAssignments.map((completed,id) => {
                
                return (<div key={id}>
                            <p>{completed.assignment} -- {completed.name}</p>
                        </div>)
            })
        }else {
            return null;
        }
    });
    
    
    return(
        <div className={classes.Completed}>
            <h2>Completed Assignments</h2>
            {assignments}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        assignments:state.assignments.students,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}

export default connect(mapStateToProps)(completedAssignments);