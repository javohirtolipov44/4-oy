import userService from "../services/user.service.js";

class userController {
  constructor() {
    this.userService = new userService();
  }
  async getAllUsersController(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  }
  async addUserController(req, res) {
    try {
      const body = req.body;
      const user = await this.userService.addUser(body);
      if (user) {
        res.status(201).json({
          message: "success",
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(404).json({
        message: error.message,
      });
    }
  }

  async getActiveUsersController(req, res) {
    try {
      const users = await this.userService.activeUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getOneUserController(req, res) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.oneUser(id);
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  }

  async searchUserController(req, res) {
    try {
      const query = req.query;
      const user = await this.userService.searchUser(query);
      res.json(user);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default userController;
