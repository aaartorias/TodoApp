import React, {Component} from "react";

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