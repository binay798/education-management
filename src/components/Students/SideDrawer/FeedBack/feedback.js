import React from 'react';
import {connect} from 'react-redux'
const feedback = props => {
    
    let userFeedback = props.feedback[props.authenticatedUser];
    
    let x = userFeedback.map((item,id) => {
        return item.feedback.map((feedback,id) => {
        return (<div key={id}>To {item.teacher} -- {feedback}</div>)
        })
    })
    return(
        <div>
            <h2>Your feedbacks</h2>
            {x}
        </div>
        )
}

const mapStateToProps = state => {
    return {
        feedback:state.feedback.sentFeedbackByStudent,
        authenticatedUser:state.authenticatedUser.authenticatedUser
    }
}

export default connect(mapStateToProps)(feedback);