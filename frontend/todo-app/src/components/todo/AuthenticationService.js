
class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        console.log('register successful login');
        sessionStorage.setItem('authenticatedUser', username);
    }
    
}

// for React components we export the class directly.
// for Helper Services, we export an instance of hte class - an object
export default new AuthenticationService();