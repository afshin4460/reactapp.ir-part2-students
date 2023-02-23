import React from 'react';
import './button.css';

function Button(props) {

    const classes = ['Button'];
    switch(props.btnType) {
        case 'danger':
            classes.push('Danger');
            break;
        case 'success':
            classes.push('Success');
            break;
        default:
            break;
    }

    return (
        <button className={classes.join(' ')} onClick={props.clicked}>{props.children}</button>
    );
}

export default Button;
