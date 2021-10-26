import React, {Component} from "react";
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'JohnDoe',
            password: '',
            loginFailed: false,
            loginSucceded: false
        };
    }

    // Generic handler for input events of Login 
    handleChange = (event) => {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );

    }

    // history - lets us manage session history anythwere JS runs
    // history - manage history stack, navigate, confirm navigation and persist state between sessions
    loginClicked = () => {
        // Hardcoding the login credentials: At present only {JohnDoe and dummy} are correct credentials
        // console.log(this.state)
        if (this.state.username==='JohnDoe' && this.state.password==='dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            //console.log(this.state)
            this.props.history.push(`/welcome/${this.state.username}`)
            
        } else {
            console.log('failed')
            this.setState({loginFailed: true})
            this.setState({loginSucceded: false})
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials!</div>}
                    {this.state.loginSucceded && <div>Login Successful!</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter User name"/>
                    Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;