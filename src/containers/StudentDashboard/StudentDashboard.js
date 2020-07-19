import axios from 'axios';

import React from 'react';

class Student extends React.Component {
    componentDidMount() {
        axios.get('https://education-project-1a678.firebaseio.com/.json')
        .then(res => console.log(res));
    }
    render() {
        return (<div>Student Dashboard</div>)
    }
}
export default Student;