import React from 'react';

import Auth from '../../components/Auth/Auth';
import {Route} from 'react-router-dom'
class Homepage extends React.Component {

    
    
    render() {
        
       
        return (
            <div>
                <Route path="/">
                    <Auth />
                </Route>
                
            </div>
        )
    }
}



export default Homepage;