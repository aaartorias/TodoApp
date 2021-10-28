import axios from 'axios'

class HelloWorldService {
    executeHelloWorldServie() {
        console.log('Executed service');

        return axios.get('http://localhost:8080/hello-world')
    }
}

export default new HelloWorldService();