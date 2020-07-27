import React from 'react';
import classes from './teacherInfo.module.css';
import {connect} from 'react-redux';
import Button from '../../../components/Button/Button'

import axios from 'axios';
import * as actionTypes from '../../../store/actions/actionTypes'
const TeacherInfo = props => {

    //state
    const [feed,setFeed] = React.useState({
        desc:null,
    })
    const [loading,setLoading] = React.useState(false)
    const newFeedbacks = props.feedbacks

    const sendRequest = (e) => {
        e.preventDefault()
        let feeds = {
            studentName:props.authenticatedUser,
            feedback:feed.desc,
            teacherName:props.teacherInfo.username,
        };
        let updatedFeedback = newFeedbacks.concat(feeds)
        

        setLoading(true)
        
        //send to firebase
        axios.put(`https://education-project-1a678.firebaseio.com/feedbacks.json`,updatedFeedback)
        .then(res => {
            props.onFeedbackChanged(updatedFeedback)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
        });
        
    }
    const inputChangedHandler = (e) => {
        
        // if(inpElement.current.value !== "") {
        
        if(e.target.value.trim() !== "") {
            setFeed({desc:e.target.value.trim()})
        }
        // }
    }

    


    return(
        <div className={classes.TeacherInfo}>
            
            <h2>@{props.teacherInfo.username}</h2>
            <p>Age: {props.teacherInfo.age} </p>
            <p>Email: {props.teacherInfo.email} </p>
            <p>Contact no.: {props.teacherInfo.phoneNo} </p>
            <p>Subject: {props.teacherInfo.subject} </p>
            <hr />
            <h3>Send Feedback</h3>
            {/*Send feedback*/}
            <form style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
                <textarea placeholder="write something..." onChange={inputChangedHandler}  type="text" style={{width:"90%",display:"block",margin:"0 auto"}} /><br />
                <Button name="Send" clicked={sendRequest} />
                {loading ? <p>Loading</p> : null}
            </form>
            
        </div>
        )
}
const mapStateToProps = state => {
    return {
        authenticatedUser:state.authenticatedUser.authenticatedUser.name,
        feedbacks:state.feedback,
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFeedbackChanged:(val) => dispatch({type:actionTypes.SEND_FEEDBACK,value:val})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherInfo);