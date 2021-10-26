import React, {Component} from "react";
import {BrowserRouter as Link} from 'react-router-dom';

class WelcomeComponent extends Component { 
    render() {
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todo list <Link to='/todos'>here</Link>
                </div>
            </div>
        ) 
    }
}

export default WelcomeComponent;