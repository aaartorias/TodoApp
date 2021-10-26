// SessionStorage property allows you to access a session Storage object for the current origin

// register that a user has logged in using sessionStorage.setItem()
// data stored in sessionStorage gets cleared when the page session ends
// data in localStorage has no expiration time
class AuthenticationService {
    
    registerSuccessfulLogin(username,password) {
        console.log('register successful login');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return false;
        return true;
    }
    
}

// for React components we export the class directly.
// for Helper Services, we export an instance of hte class - an object
export default new AuthenticationService();