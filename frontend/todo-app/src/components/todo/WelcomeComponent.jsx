import React, {Component} from "react";
import {BrowserRouter as Link} from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService.js";


class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage : "",
            WelcomMessageFrombeans: "",
            WelcomMessageFromParameterizedBeans: "",
            ErrorMessage: ""
        }
    }

    render() {
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todo list <Link to='/todos'>here</Link>
                </div>
                <hr /> 
                <div className="container">
                    Click here to get a customized welcome message 
                    <button  onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <hr />
                <div className="container">
                    Click here to get a customized welcome message 
                    <button  onClick={this.retrieveWelcomeMessageFromBeans} className="btn btn-success">Get Welcome Message</button>
                </div> 
                <div className="container">
                    {this.state.WelcomMessageFrombeans}
                </div>
                <hr />
                <div className="container">
                    Click here to get a customized welcome message
                    <button  onClick={this.retrieveWelcomMessageFromParameterizedBeans} className="btn btn-success">Get Welcome Message</button>
                </div> 
                <div className="container">
                    {this.state.WelcomMessageFromParameterizedBeans}
                </div>
                <hr />
                <div className="container">
                    Click here to get an error message
                    <button  onClick={this.retrieveErrorMessage} className="btn btn-danger">Get Error Message</button>
                </div> 
                <div className="container">
                    {this.state.ErrorMessage}
                </div>
            </div>
        ) 
    }

    retrieveWelcomeMessage = () => {
        console.log("Retrieve welcome message called");
        HelloWorldService.executeHelloWorldServie()
        .then(response => this.handleSuccessMessage(response))
        .catch(error => console.log('no response found'))
    }

    retrieveWelcomeMessageFromBeans = () => {
        console.log("Retrieve welcome message from beans called");
        HelloWorldService.executeHelloWorldBeanServie()
        .then(response => this.handleSuccessMessageFromBean(response))
        .catch(error => console.log('no response found'))
    }
    
    retrieveWelcomMessageFromParameterizedBeans= () => {
        console.log("Retrieve welcome message from beans called");
        HelloWorldService.executeHelloWorldBeanServieWithPathVariableService(this.props.match.params.name)
        .then (response => this.handleSuccessMessageFromParameterizedBean(response))
        .catch(error => console.log('no response found'))
    }

    retrieveErrorMessage = (error) => {
        console.log(error);
        HelloWorldService.executeGetErrorFromBeaneService()
        .then(response => console.log("weird, I wasn't expecting a respose here"))
        .catch(error => this.handleErrorMessage(error));
    }

    handleSuccessMessage = (response) => {
        this.setState ({welcomeMessage:response.data})
    }

    handleSuccessMessageFromBean = (response) => {
        console.log(response);
        this.setState({WelcomMessageFrombeans: response.data.message});
    }

    handleSuccessMessageFromParameterizedBean = (response) => {
        console.log(response);
        this.setState({WelcomMessageFromParameterizedBeans: response.data.message});
    }

    handleErrorMessage = (error) => {
        console.log(error.response);
        let errorMessage = ''
        if (error.message) {
            errorMessage += error.message
        }

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ErrorMessage: errorMessage});
    }
}

export default WelcomeComponent;