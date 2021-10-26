import React, {Component} from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'

class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={LoginComponent}></Route>
                    <Route path="/login" component={LoginComponent}></Route>
                    <Route path="/welcome" component={WelcomeComponent}></Route>
                </Router>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'ffff',
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

    loginClicked = () => {
        // Hardcoding the login credentials: At present only {JohnDoe and dummy} are correct credentials
        // console.log(this.state)
        if (this.state.username==='JohnDoe' && this.state.password==='dummy') {
            console.log(this.state)
            this.setState({loginSucceded: true})
            this.setState({loginFailed: false})
        } else {
            console.log('failed')
            this.setState({loginFailed: true})
            this.setState({loginSucceded: false})
        }
    }



    render() {
        return (
            <div>
                {this.state.loginFailed && <div>Invalid Credentials!</div>}
                {this.state.loginSucceded && <div>Login Successful!</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter User name"/>
                Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

class WelcomeComponent extends Component { 
    render() {
        return <div>Welcome to My App!</div>
    }
}

export default TodoApp;