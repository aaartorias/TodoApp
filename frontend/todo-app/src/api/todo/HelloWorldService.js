import axios from 'axios'

class HelloWorldService {
    executeHelloWorldServie() {
        console.log('Executed service');
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanServie() {
        console.log('Executed service: hello-world-bean');
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldBeanServieWithPathVariableService(name) {
        console.log('Executed service: hello-world-bean');
        return axios.get(`http://localhost:8080/hello-world-bean/${name}`)
    }

    executeGetErrorFromBeaneService(name) {
        console.log('Executed service: hello-world-bean');
        return axios.get(`http://localhost:8080/hello-world-bean/sendErrorData`)
    }
}

export default new HelloWorldService();