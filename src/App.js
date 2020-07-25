import React from 'react';
import axios from 'axios'
import StudentDashboard from './containers/StudentDashboard/StudentDashboard';
import TeacherDashboard from './containers/TeacherDashboard/TeacherDashboard';
import {connect} from 'react-redux'
import * as actionTypes from './store/actions/actionTypes';
import {Route} from "react-router-dom"
import Homepage from './containers/Homepage/Homepage'



let initialState = {};
class App extends React.Component {


    //Getting store from firebase and save to local redux store
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

            this.props.setUsers(initialState.users);

            this.props.onStart()
            
        })
        .catch(err => {
          console.log("Network error")
        });
    }
  render() {
    console.log(this.props.started)
    return (
      <div className="App">
        {this.props.started ? 
        (<><Route  path="/">
          <Homepage />
        </Route>
        <Route  path="/student">
          <StudentDashboard />
        </Route>
        <Route path="/teacher" >
          <TeacherDashboard />
        </Route></>) :null
        }
      </div>
        
    );
  }
  
}

const mapStateToProps = state => {
  return {
    started:state.started.started
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setAssignment:(value) => dispatch({type:actionTypes.SET_ASSIGNMENTS,val:value}),
      setFeedback:(value1,value2) => dispatch({type:actionTypes.SET_FEEDBACK,sent:value2,received:value1}),
      setNotices:(value) => dispatch({type:actionTypes.SET_NOTICES,val:value}),
      setUsers:(value) => dispatch({type:actionTypes.SET_USERS,val:value}),
      onStart:() => dispatch({type:actionTypes.STARTED})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
