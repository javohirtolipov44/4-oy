import Io from "../utils/io.js";

class userService {
  constructor() {
    this.fileSystem = new Io();
  }
  async getAllUsers() {
    const users = await this.fileSystem.readFile("users.json");
    return users;
  }
  async addUser(body) {
    const users = await this.fileSystem.readFile("users.json");
    const findUser = users.find((user) => user.username === body.username);
    if (!findUser) {
      users.push(body);
      await this.fileSystem.writeFile("users.json", users);
      return users;
    }
    throw new Error("username already been existed");
  }
}

export default userService;
