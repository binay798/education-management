import React from 'react';
import {connect} from 'react-redux';

import classes from './Feedbacks.module.css';
const feedbacks = props => {
    
    
    const getFeedback = () => {
        
        return props.feedbacks.map((feedback,id) => {
            if(props.authenticatedUser === feedback.teacherName) {
                return (
                <div key={id} className={classes.Feedbacks}>
                    <p>{feedback.feedback}</p>
                    <p>By - {feedback.studentName}</p>
                </div>
                )
            }else {
                return null
            }
        })
    }
    
    return (
        <div className={classes.Feed}>
            <h2>Feedbacks</h2>
            {getFeedback()}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        feedbacks:state.feedback,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}
export default connect(mapStateToProps)(feedbacks);