import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService.js"
import AuthenticationService from "./AuthenticationService.js";

class ListToDosComponent extends Component {
    constructor(props) {
        super(props);
        // hardcoded todo information
        this.state = {
            todos: [ ]
        }
    }

    // componentDidMount() - this method is called when componenet is loaded for the first time
    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {this.handleGetTodoSuccess(response);})
        .catch(error => console.log(error))
    }
    
    handleGetTodoSuccess = (response) => {
        this.setState({
            todos: response.data
        });
    }

    render() {
        return (
            <div>
                <h1>List Todo tasks</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task Description</th>
                            <th>Completed?</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                                // key helps react keep track of the rows - gives Warning if key is not mentioned
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>              
                </table>
                </div>
            </div>
        )
    }
}

export default ListToDosComponent;