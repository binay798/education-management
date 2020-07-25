import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../../../store/actions/actionTypes';
import axios from 'axios';
const SendNotices = props => {
    let [notice,setNotice] = React.useState({loading:false})
    let inpElement = React.createRef();

    const addNotice = (value) => {
        setNotice({loading:true})
        let newNotice = {...props.notices}
        let newUserNotice = [...newNotice[props.authenticatedUser]]
        let updatedUserNotice = newUserNotice.concat(value)
        newNotice[props.authenticatedUser] = updatedUserNotice

        axios.put('https://education-project-1a678.firebaseio.com/notices.json',newNotice)
        .then(res => {
            props.onNoticeAdded(newNotice)
            setNotice({loading:false})
        })
        .catch(err => {
            console.log(err)
        });
        
    }
    

    const changeInputHandler = (e) => {
        if(inpElement.current.value !== "") {
            addNotice(inpElement.current.value)
            inpElement.current.value = ""
        }
    }

    return(
        <div>
            <h2>Issue Notice</h2>
            <textarea ref={inpElement} cols="50" rows="5" /><br />
            <button onClick={changeInputHandler}>{notice.loading ? "Loading" : "Issue"}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notices:state.notice,
        authenticatedUser:state.authenticatedUser.authenticatedUser.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNoticeAdded:(val) => dispatch({type:actionTypes.SET_UPDATED_NOTICES,value:val})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendNotices);