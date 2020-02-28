import React from 'react';
import UserInputStyle from './Style.css';

const UserInput  = (props) => {
    return (
            <input type = "text" onChange = { props.onChange } placeholder = 'Type Something Here' autoFocus className = "UserInputStyle" />
    )
}

export default UserInput;