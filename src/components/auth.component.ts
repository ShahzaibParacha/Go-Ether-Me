class Auth {
    allow: boolean;
    constructor() {
        this.allow = false;
    };

    login() {
        this.allow = true;
    }

    logout() {
        this.allow = false;
    }

    getStatus() {
        return this.allow;
    }
}

export default Auth;