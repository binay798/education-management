import React from 'react';
import {connect} from 'react-redux'
const feedbacks = props => {
    
    let feedback = props.feedbacks[props.authenticatedUser];
    if(feedback) {
        
        feedback = feedback.map(item => {
            
            return item.feedback.map(feed => {
                return (
                    <div style={{borderBottom:"1px solid #ccc"}}>
                        <p>"{feed}"</p>--{item.student}
                    </div>
                )
            })
        })
    }else {
        feedback = null;
    }
    
    return (
        <div>
            <h2>Feedbacks</h2>
            {feedback}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        feedbacks:state.feedback.ReceivedFeedbackByTeacher,
        authenticatedUser:state.authenticatedUser.authenticatedUser
    }
}

export default connect(mapStateToProps)(feedbacks);