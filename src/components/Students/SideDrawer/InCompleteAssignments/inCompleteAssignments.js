import React from 'react';
import {connect} from 'react-redux';
import classes from './inCompleteAssignments.module.css';
import Button from '../../../Button/Button'
const inCompleteAssignments = props => {

    //New copy of assignments
   

    
    
    
    const incompleteAssignments = props.assignments.map((assignment,userIndex) => {
        if (assignment.name === props.authenticatedUser) {
            
            return assignment.inCompleteAssignments.map((assignment,id) => {
                return (
                <div key={id} className={classes.Assignments}>
                    <p>{assignment.name} -- {assignment.assignment}</p>
                    <Button clicked={null} name="Completed" />
                </div>
                )
            })
        }else {
            return null;
        }
    })
    
    return(
        <div className={classes.InComplete}>
            <h2>Incomplete Assignments</h2>
            {incompleteAssignments}
        </div>
        )
}

const mapStateToProps = state => {
    return {
        assignments:state.assignments.students,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}

export default connect(mapStateToProps)(inCompleteAssignments);