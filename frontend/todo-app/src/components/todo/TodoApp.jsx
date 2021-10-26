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
            userName: '',
            password: ''
        };
    }

    handleUserIdChange = (event) => {
        //console.log(event.target.value);
        this.setState({userName: event.target.value});
    }

    handlePasswordChange = (event) => {
        //console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.userName} onChange={this.handleUserIdChange} placeholder="Enter User name"/>
                Password: <input type="password" name="password"  value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter Password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;