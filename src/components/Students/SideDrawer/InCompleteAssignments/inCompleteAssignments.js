import React from 'react';
import {connect} from 'react-redux'
const inCompleteAssignments = props => {
    
    const incompleteAssignments = props.assignments.map(assignment => {
        if (assignment.name === props.authenticatedUser) {
            
            return assignment.inCompleteAssignments.map((assignment,id) => {
                return (<div key={id}>{assignment.name} -- {assignment.assignment}</div>)
            })
        }else {
            return null;
        }
    })
    
    return(
        <div>
            <h2>Incomplete Assignments</h2>
            {incompleteAssignments}
        </div>
        )
}

const mapStateToProps = state => {
    return {
        assignments:state.assignments.students,
        authenticatedUser:state.authenticatedUser.authenticatedUser
    }
}

export default connect(mapStateToProps)(inCompleteAssignments);