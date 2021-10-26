import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from "./LoginComponent";
import ListToDosComponent from "./ListTodos";
import WelcomeComponent from "./WelcomComponent"
import ErrorComponent from "./ErrorComponent";
import Header from "./HeaderComponent";
import Footer from "./Footer";
import LogoutComponent from "./LogoutComponent";

// Switch - ensures at any point only one of the routes match
class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <Header />
                    <Switch>    
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListToDosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route path="" component={ErrorComponent}/>
                    </Switch>
                    <Footer/>    
                </Router>
            </div>
        )
    }
}

export default TodoApp;