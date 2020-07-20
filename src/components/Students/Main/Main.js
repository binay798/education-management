import CompletedAssignments from '../SideDrawer/CompletedAssignments/completedAssignments'
import InCompleteAssignments from '../SideDrawer/InCompleteAssignments/inCompleteAssignments'
import Feedback from '../SideDrawer/FeedBack/feedback'
import Notices from '../SideDrawer/Notices/notices'
import Profile from '../SideDrawer/Profile/profile';
import React from 'react';
import classes from './Main.module.css';
import {Route} from 'react-router-dom';
import TeacherInfo from'../TeacherInfo/teacherInfo';
import {connect} from 'react-redux'
const send = props => {

    let teachers = props.teachers.map((teacher,id) => {
        return (
            <Route key={id} path={`/student/${teacher.name}`}><TeacherInfo teacherInfo={teacher} /></Route>
            )
        })

    return (
            <div className={classes.Main}>
                <Route  path="/student/completedAssignments" component={CompletedAssignments} />
                <Route  path="/student/incompleteAssignments" component={InCompleteAssignments} />
                <Route  path="/student/feedback" component={Feedback} />
                <Route  path="/student/notices" component={Notices} />
                <Route  path="/student/profile" component={Profile} />
                <Route exact path="/student/">
                    <InCompleteAssignments />
                </Route>
                {teachers}

                {/* Teachers list */}
                
            </div>
            )
}
const mapStateToProps = state => {
    return {
        teachers:state.user.teachers
    }
}
export default connect(mapStateToProps)(send);