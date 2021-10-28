import React, {Component} from "react";
import {BrowserRouter as Link} from 'react-router-dom';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todo list <Link to='/todos'>here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message 
                    <button  onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </div>
        ) 
    }

    retrieveWelcomeMessage = () => {
        console.log("Retrieve welcome message called")
    }
}

export default WelcomeComponent;