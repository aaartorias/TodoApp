import moment from "moment";
import React, {Component} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService";

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount = () => {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
        .then( response => {
            this.setState({
                id: this.state.id,
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        })
        .catch(
            error => console.log(error)
        )
    }


    validate = (values) => {
        let errors = {}

        if (!values.description && values.description.length < 5) {
            errors.description = "Enter a description"
        } else if (values.description.length < 5) {
            errors.description = 'Enter 5 characters at least'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid Target Date"
            console.log("Invalid date")
        } 
        
        return errors;
    }

    onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName();
        let todo =  {
            name: username,
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            this.createTodo(username,todo)
        } else {
            this.updateTodo(username, todo)
        }
    }

    createTodo = (username, todo) => {
        TodoDataService.createTodo(username,todo)
        .then(
            this.props.history.push(`/todos`)
        )
        .catch(
            error => console.log(error)
        )
    }

    updateTodo = (username, todo) => {
        TodoDataService.updateTodo(username, this.state.id, todo)
            .then(
                this.props.history.push(`/todos`)
            )
            .catch(
                error => console.log(error)
            )
    }

    render() {
        let {description, targetDate} = this.state
        return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{description, targetDate }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            Update Todo {this.props.match.params.id}
        </div>
        )
    }
}

export default TodoComponent;