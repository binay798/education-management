import React from 'react';
import {connect} from 'react-redux'
const TeacherInfo = props => {

    
    let inpElement = React.createRef()
    const inputChangedHandler = (e) => {
        e.preventDefault();
        // if(inpElement.current.value !== "") {

        // }
    }
    return(
        <div>
            Teacher Info
            <h2>{props.teacherInfo.username}</h2>
            <p>Age: {props.teacherInfo.age} </p>
            <p>Email: {props.teacherInfo.email} </p>
            <p>Contact no.: {props.teacherInfo.phoneNo} </p>
            <p>Subject: {props.teacherInfo.subject} </p>
            <hr />
            <h3>Send Feedback</h3>
            {/*Send feedback*/}
            <form onSubmit={inputChangedHandler}>
                <textarea ref={inpElement} type="text" style={{width:"90%",display:"block",margin:"0 auto"}} /><br />
                <button style={{display:"block",width:"50%",margin:"0 auto"}}>Submit</button>
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
export default connect(mapStateToProps)(TeacherInfo);