import axios from  'axios'

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(name,id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodo(name,id,description,targetDate) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}/${description}/${targetDate}`)
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService();