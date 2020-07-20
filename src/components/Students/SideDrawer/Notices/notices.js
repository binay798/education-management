import React from 'react';
import {connect} from 'react-redux'
const notices = props => {
    let teachers = Object.keys(props.notices);
    let x = teachers.map(teacher => {
        
        return props.notices[teacher].map(notice => {
        return (<div>{teacher} -- {notice}</div>)
        })
    })
    
    return(
            <div>
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