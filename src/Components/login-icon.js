// login-icon.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class LoginIcon extends React.Component {
    render() {
        return (
            <div className='login-register'>
                <NavLink exact to="/login">
                    <FontAwesomeIcon icon={faRightToBracket} className='login' />
                </NavLink>
            </div>
        )
    }
}

export default LoginIcon;
