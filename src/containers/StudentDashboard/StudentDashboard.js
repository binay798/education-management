import axios from 'axios';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import React from 'react';

//Just for testing state of firebase
let initialState = {};
class Student extends React.Component {

    
    componentDidMount() {
        axios.get('https://education-project-1a678.firebaseio.com/.json')
        .then(res => {
            initialState = {...res.data}
            //send assignments from firebase to store assignments
            this.props.setAssignment(initialState.assignments)
            //send feedback from firebase to store feedback
            this.props.setFeedback(initialState.receivedFeedbackByTeacher,initialState.sentFeedbackByStudent);
            //send notices from firebase to store notices
            this.props.setNotices(initialState.notices)
            
        });
    }
    showData = () => {
        console.log(this.props.assignments,this.props.feedback,this.props.notices)
    }
    render() {
        
        return (
            <div>
                <p>Student Dashboard</p>
                <button onClick={this.showData}>click</button>
            </div>
        )
    }
}



//Redux stuff
const mapStateToProps = state => {
    
    return {
        assignments:state.assignments,
        feedback:state.feedback,
        notices:state.notice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setAssignment:(value) => dispatch({type:actionTypes.SET_ASSIGNMENTS,val:value}),
        setFeedback:(value) => dispatch({type:actionTypes.SET_FEEDBACK,val:value}),
        setNotices:(value) => dispatch({type:actionTypes.SET_NOTICES,val:value}),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Student);