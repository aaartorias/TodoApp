import axios from "axios";
// SessionStorage property allows you to access a session Storage object for the current origin


class AuthenticationService {
    // register that a user has logged in using sessionStorage.setItem()
    // data stored in sessionStorage gets cleared when the page session ends
    // data in localStorage has no expiration time
    registerSuccessfulLogin(username, password) {
        console.log('register successful login');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`,
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }

    createBasicAuthToken(username, password) {
        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)
        return basicAuthHeader
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return '';
        return user;
    }

    setupAxiosInterceptor(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                console.log("Interceptor")
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader;
                }
                return config;
            }
        )
    }
}

// for React components we export the class directly.
// for Helper Services, we export an instance of the class - an object
export default new AuthenticationService();