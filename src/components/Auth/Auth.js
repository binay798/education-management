import React from 'react';
import LoginView from '../Auth/LoginView/LoginView'
import SignUpView from '../Auth/SignUpView/SignUpView';
import {Route} from 'react-router-dom'
class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginView:false,
            isStudent:true,
        }
        
    }
  

    
    
       
        
        
    


    
    render() {
        
        
        
        return (
            <div>
                <Route path="/signup" >
                    <SignUpView />
                </Route>
                <Route path="/" exact>
                    <LoginView />
                </Route>
                
            </div>
        )
    }
}

export default Auth;

