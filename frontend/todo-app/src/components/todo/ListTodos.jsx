import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService.js"
import AuthenticationService from "./AuthenticationService.js";
import moment from "moment";

class ListToDosComponent extends Component {
    constructor(props) {
        super(props);
        // hardcoded todo information
        this.state = {
            todos: [ ],
            message: null
        }
    }

    // componentDidMount() - called when componenet is loaded for the first time
    componentDidMount = () => {
        this.refreshTodos();
    }
    
    handleGetTodoSuccess = (response) => {
        this.setState({
            todos: response.data
        });
    }

    deleteTodo = (id) => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState ({message:`Deleted todo id ${id}`})
                this.refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    updateTodo = (id) => {
        this.props.history.push(`/todos/${id}`)
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                this.handleGetTodoSuccess(response)
                console.log(response)
            }
        )
        .catch(error => console.log(error))
    }

    addTodoClicked = () => {
        this.props.history.push(`todos/-1`)
    }

    render() {
        return (
            <div>
                <h1>List Todo tasks</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task Description</th>
                            <th>Completed?</th>
                            <th>Target date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                                // key helps react keep track of the rows - gives Warning if key is not mentioned
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td> <button className="btn btn-warning" onClick={()=>this.deleteTodo(todo.id)}>Delete</button> </td>
                                    <td> <button className="btn btn-success" onClick={()=>this.updateTodo(todo.id)}>Update</button> </td>
                                </tr>
                            )
                        }
                        
                    </tbody>              
                </table>
                <div> <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button></div>
                </div>
            </div>
        )
    }
}

export default ListToDosComponent;