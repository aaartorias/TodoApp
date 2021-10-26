import React, {Component} from "react"

class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <LoginComponent />
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
                <ShowLoginFailed loginFailed = {this.state.loginFailed}/>
                <ShowLoginSucceded loginSucceded = {this.state.loginSucceded} />
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter User name"/>
                Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function ShowLoginFailed(props) {
    if (props.loginFailed) {
        return <div>Invalid Credentials!</div>
    }
    return null;
}

function ShowLoginSucceded(props) {
    if (props.loginSucceded) {
        return <div>Login Successful!</div>
    }
    return null;
}

export default TodoApp;