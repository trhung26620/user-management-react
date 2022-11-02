import React from "react";
import './Navigation.scss'
import {
    Link, NavLink
} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/user" activeClassName="active" exact={true}>
                    Manage Users
                </NavLink>
            </div>
        )
    }
}

export default Navigation;