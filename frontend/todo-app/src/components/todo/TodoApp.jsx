import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

// Switch - ensures at any point only one of the routes match
class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <Header />
                    <Switch>    
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                        <Route path="/todos" component={ListToDosComponent}></Route>
                        <Route path="/logout" component={LogoutComponent}></Route>
                        <Route path="" component={ErrorComponent}></Route>
                    </Switch>
                    <Footer/>    
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
    
    // history - lets us manage session history anythwere JS runs
    // history - manage history stack, navigate, confirm navigation and persist state between sessions
    loginClicked = () => {
        // Hardcoding the login credentials: At present only {JohnDoe and dummy} are correct credentials
        // console.log(this.state)
        if (this.state.username==='JohnDoe' && this.state.password==='dummy') {
            console.log(this.state)
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
        return <div>Welcome {this.props.match.params.name}. Please click <Link to='/todos'> here</Link> </div>
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
                {id:1, description: 'Learn React', done: false, targetDate:new Date()},
                {id:2, description: 'Learn Java', done: false, targetDate:new Date()},
                {id:3, description: 'Learn Cooking', done: false, targetDate:new Date()},
                {id:4, description: 'Learn Design Patterns', done: false, targetDate:new Date()},
                {id:5, description: 'Learn Unit Testing', done: false, targetDate:new Date()}
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
                            <th>Id</th>
                            <th>Description</th>
                            <th>Completed?</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>              
                </table>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand" href="www.google.com">Google Search</a>
                    </div>
                    <ul className="navbar-nav">
                        <li><Link  className="nav-link" to="/welcome/JohnDoe">Home</Link> </li>
                        <li><Link  className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link  className="nav-link" to="/login">Login</Link></li>
                        <li><Link  className="nav-link" to="/logout">Logout</Link></li>
                    </ul>

                </nav>
            </header>
            
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted"> All rights Reserved 2021 @shuhbhendu</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thanks for using our application
                </div>
            </div>
        )
    }
}

export default TodoApp;