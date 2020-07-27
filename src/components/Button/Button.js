import React from 'react';
import classes from './Button.module.css';
const Button = ({clicked,name}) => {
    return (
        <button onClick={clicked} className={classes.Button}>{name}</button>
    )
}
export default Button;