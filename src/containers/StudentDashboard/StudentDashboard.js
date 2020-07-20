
import {connect} from 'react-redux'

import React from 'react';
import classes from './StudentDashboard.module.css';
import Sidedrawer from '../../components/Students/SideDrawer/SideDrawer';
import Header from '../../components/Students/Header/header';
import TeacherList from '../../components/Students/TeacherInfo/TeacherList/teacherList'
import Main from '../../components/Students/Main/Main'



class Student extends React.Component {

    
    
    render() {
        
        return (
            <div className={classes.Student}>
                <div className={classes.Sidedrawer}>
                    <Sidedrawer />
                </div>
                <div className={classes.Main__right}>
                    <div className={classes.Header}>
                        <Header />
                    </div>
                    <div className={classes.Main}>
                        <TeacherList />
                        <Main />
                    </div>
                </div>
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


export default connect(mapStateToProps)(Student);