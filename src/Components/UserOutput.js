import React from 'react';
import UserOutputStyle from './Style.css';

const UserOutput  = (props) => {
    return (
        <div className="UserOutputStyle">
            <p>Assignment 1</p>
            <p>{props.name}</p>
        </div>       
    )
}

export default UserOutput;