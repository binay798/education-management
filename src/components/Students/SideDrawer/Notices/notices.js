import React from 'react';
import {connect} from 'react-redux';
import classes from './notices.module.css';
const notices = props => {
    let teachers = Object.keys(props.notices);
    let x = teachers.map(teacher => {
        
        return props.notices[teacher].map((notice,id) => {
        return (<div key={id}>{teacher} -- {notice}</div>)
        })
    })
    
    return(
            <div className={classes.Notice}>
                <h2>Notices</h2>
                {x}
            </div>
            )
}

const mapStateToProps = state => {
    return {
        notices:state.notice
    }
}

export default connect(mapStateToProps)(notices);