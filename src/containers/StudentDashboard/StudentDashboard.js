import axios from 'axios';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import React from 'react';

//Just for testing state of firebase
let initialState = {};
class Student extends React.Component {

    showData = () => {
        console.log("Initial State",initialState)
    }
    componentDidMount() {
        axios.get('https://education-project-1a678.firebaseio.com/.json')
        .then(res => {
            initialState = {...res.data}
            
            this.showData()
        });
    }
    render() {
       
        return (<div>Student Dashboard</div>)
    }
}



export default Student;