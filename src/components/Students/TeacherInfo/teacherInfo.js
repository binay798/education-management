import React from 'react';

const teacherInfo = props => {
    
    return(
        <div>
            Teacher Info
            <h2>{props.teacherInfo.name}</h2>
            <p>Age: {props.teacherInfo.age} </p>
            <p>Email: {props.teacherInfo.email} </p>
            <p>Contact no.: {props.teacherInfo.phoneNo} </p>
            <p>Subject: {props.teacherInfo.subject} </p>
            <hr />
            <h3>Send Feedback</h3>
            {/*Send feedback*/}
            
            <input type="text" style={{width:"90%",display:"block",margin:"0 auto"}} /><br />
            <button style={{display:"block",width:"50%",margin:"0 auto"}}>Submit</button>
        </div>
        )
}

export default teacherInfo