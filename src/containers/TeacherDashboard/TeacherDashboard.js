import React from 'react';
import classes from './TeacherDashboard.module.css';
import Header from '../../components/Teachers/Header/Header';
import Sidedrawer from '../../components/Teachers/SideDrawer/SideDrawer';
import Main from '../../components/Teachers/Main/Main';
import Feedbacks from '../../components/Teachers/Feedbacks/Feedbacks'
class TeacherDashboard extends React.Component {

    render() {
        return (
            
                <div className={classes.TeacherDashboard}>
                    <div className={classes.Sidedrawer}>
                        <Sidedrawer />
                    </div>
                    <div className={classes.Right}>
                        <div className={classes.Header}>
                            <Header />
                        </div>
                        <div className={classes.Main}>
                            <div>
                                <Main />
                            </div>
                            <div className={classes.Feedbacks}>
                                <Feedbacks />
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default TeacherDashboard;