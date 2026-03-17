const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        // Starts at 1 to match the test requirements
        this.n = 1; 
        this.users = [];
        
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
        });
    }

    // Add a single user
    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    // Remove the last user
    removeOneUser() {
        if (this.users.length > 0) {
            this.n = this.n - 1;
            return this.users.pop();
        } else {
            return null;
        }       
    }

    // Remove the last two users
    removeTwoUsers() {
        if (this.users.length >= 2) {
            this.n = this.n - 2;
            const u1 = this.users.pop();
            const u2 = this.users.pop();
            return [u1, u2];
        } else if (this.users.length === 1) {
            this.n = this.n - 1;
            return [this.users.pop()];
        } else {
            return [];
        }
    }

    // Get current count
    getUserCount() {
        return this.n;
    }

    // Clear all users and reset count to 0
    clearUsers() {
        this.users = [];
        this.n = 0;
    }
}

module.exports = UserData;