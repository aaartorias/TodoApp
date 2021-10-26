import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Switch - ensures at any point only one of the routes match
class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>    
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                        <Route path="/todos" component={ListToDosComponent}></Route>
                        <Route path="" component={ErrorComponent}></Route>
                    </Switch>    
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
            // history - lets us manage session history anythwere JS runs
            // history - manage history stack, navigate, confirm navigation and persist state between sessions
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({loginSucceded: true})
            // this.setState({loginFailed: false})
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
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

class ErrorComponent extends Component {
    render() {
        return <div>Wrong Route. Enter correct route information to use the ToDo app</div>
    }
}


class ListToDosComponent extends Component {
    constructor(props) {
        super(props);
        // hardcoded todo information
        this.state = {
            todos: [
                {id:1, description: 'Learn React'},
                {id:2, description: 'Learn Java'},
                {id:3, description: 'Learn Cooking'},
                {id:4, description: 'Learn Design Patterns'},
                {id:5, description: 'Learn Unit Testing'}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todo tasks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>              
                </table>
            </div>
        )
    }
}

export default TodoApp;