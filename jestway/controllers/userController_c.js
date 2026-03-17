// controllers/userController.js

let users = []; // Simulated in-memory storage

class UserController {
  static async getUsers(req, res) {
    // Render the users.ejs template with user data
    res.render('users', { users });
  }

  static async createUser(req, res) {
    const { name, email } = req.body;
    
    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create user
    const newUser = { name, email };
    users.push(newUser);

    // Redirect to the users page after creating user
    res.redirect('/users');
  }
}

module.exports = UserController;