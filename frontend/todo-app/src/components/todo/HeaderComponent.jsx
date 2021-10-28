import React, {Component} from "react";
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

// To ensure that header menus are updated whenever the router is called
// we need to wrap HeaderComponent with a call to withRouter.
class Header extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand" href="https://www.google.com">Google Search</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/welcome/JohnDoe">Home</Link> </li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link  className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>

                </nav>
            </header>
            
        )
    }
}

export default withRouter(Header);