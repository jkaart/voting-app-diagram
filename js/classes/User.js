class User {
    #userID;
    #username;
    #pwHash;
    constructor(userID, username, pwHash, name) {
        this.#userID = userID;
        this.#username = username;
        this.#pwHash = pwHash;
        this.name = name;
        this.isLoggedIn = false;
    }

    get username() {
        return this.#username;
    }

    get pwHash() {
        return this.#pwHash;
    }

    logIn() {
        this.isLoggedIn = true;
        // Save login data to local storage
        localStorage.setItem('VotingApp', JSON.stringify({ userName: this.username, name: this.name, isLoggedIn:this.isLoggedIn }));
    }

    logOut() {
        this.isLoggedIn = false;
        // Remove login data from local storage
        localStorage.removeItem('VotingApp');
    }
}

export {User}