import React from 'react';
import Profile from '../SideDrawer/Profile/Profile';
import PostAssignments from '../SideDrawer/PostAssignments/PostAssignments';
import ReceivedAssignments from '../SideDrawer/ReceivedAssignments/ReceivedAssignments';
import SendNotices from '../SideDrawer/SendNotices/SendNotices';
import {Route} from 'react-router-dom';
const main = props => {
    return (
        <div>
            <Route path="/teacher/postAssignments" component={PostAssignments} />
            <Route path="/teacher/receivedAssignments" component={ReceivedAssignments} />
            <Route path="/teacher/sendNotices" component={SendNotices} />
            <Route path="/teacher/profile" component={Profile} />
            <Route exact path="/teacher">
                <PostAssignments />
            </Route>
        </div>
    )
}

export default main;