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
        let id = this.state.id
        TodoDataService.retrieveTodo(username,id)
        .then( response => {
            this.setState({
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
        } else {
            console.log("valid date")
        }

        console.log("values")
        return errors;
    }

    onSubmit = (values) => {
        console.log("here")
        console.log(values)
        let username = AuthenticationService.getLoggedInUserName();

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