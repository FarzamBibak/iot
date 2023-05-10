// menu.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Route } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            // <div classNameName='menu-body'>
            //     <FontAwesomeIcon icon={faBars} classNameName='menu-icon' />
            // </div>

            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <NavLink exact to="/register">
                                <FontAwesomeIcon icon={faSignOut} /> Log out
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;
