import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../../../store/actions/actionTypes';
import axios from 'axios';
const PostAssignments = props => {


    
    let [assignment,setAssignment] = React.useState({loading:false})

    let inpElement = React.createRef();
    let newAssignmentState = {
        ...props.assignments,
        students:[...props.assignments.students],
        teachers:[...props.assignments.teachers]
    };
    let studentAssignment = [
        ...newAssignmentState.students,
        
    ]
    let teacherAssignment = [
        ...newAssignmentState.teachers
    ]
    
    
    //Adding teacher assignment
    const addTeacherAssingment = (assignment) => {
        setAssignment({loading:true})
        let newTeacherArray = [...teacherAssignment];
        teacherAssignment.forEach(item => {
            if(item.name === props.authenticatedUser) {
                //New Object of assignment for immutability
                let newItem = {...item}
                let newAssignment = [...item.assignments]
                let updatedNewAssignment = newAssignment.concat(assignment);
                
                
                newItem.assignments = [...updatedNewAssignment]
                
                newTeacherArray.forEach((teacher,index) => {
                    if(teacher.name === props.authenticatedUser) {
                        newTeacherArray[index] = newItem
                    }
                })
                //setting teacher assignments
                //axios work remaining
                
                
               
            }
        })

        newAssignmentState.teachers = newTeacherArray;
        axios.put('https://education-project-1a678.firebaseio.com/assignments.json',newAssignmentState)
        .then(res => {
            
            props.onAddingAssignment(newAssignmentState)
            setAssignment({loading:false})
        })
        .catch(err => {
            console.log(err)
        });
        

    }

    //Adding assignment to student's incomplete assignment section;
    const addStudentAssignment = (currentAssignment) => {
        let updatedStudentAssignment = []
        studentAssignment.forEach(assignment => {
            let newAssignment = {...assignment};
            let newIncompleteAssingments = [...newAssignment.inCompleteAssignments]
            let x = newIncompleteAssingments.concat({name:props.authenticatedUser,assignment:currentAssignment})
            
            newAssignment.inCompleteAssignments = x;
            updatedStudentAssignment.push(newAssignment)
            
            
            
        })
            newAssignmentState.students = updatedStudentAssignment;

            axios.put('https://education-project-1a678.firebaseio.com/assignments.json',newAssignmentState)
            .then(res => {
                
                props.onAddingAssignment(newAssignmentState)
                setAssignment({loading:false})
            })
            .catch(err => {
                console.log(err)
            });
            
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(inpElement.current.value !== null) {
            
            addTeacherAssingment(inpElement.current.value);
            addStudentAssignment(inpElement.current.value)
            inpElement.current.value = ""
        }
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <h2>Post Assignments</h2>
                <textarea ref={inpElement} cols="50" rows="5" /><br />
                <button>{assignment.loading ? "Loading":"Post"}</button>
            </form>
        </div>
    )
   
}

const mapStateToProps = state => {
    
    return {
        assignments:state.assignments,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }

}

const mapDispatchToProps = dispatch => {
    
    return {
        onAddingAssignment:(val) => dispatch({type:actionTypes.ADD_TEACHER_ASSIGNMENT,value:val})
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(PostAssignments);