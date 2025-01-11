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
    body.id = users.length + 1;
    body.status = "active";
    console.log(body);
    if (!findUser) {
      users.push(body);
      await this.fileSystem.writeFile("users.json", users);
      return users;
    }
    throw new Error("username already been existed");
  }

  async activeUsers() {
    const users = await this.fileSystem.readFile("users.json");
    const activeUser = users.filter((user) => user.status === "active");
    return activeUser;
  }

  async oneUser(id) {
    const users = await this.fileSystem.readFile("users.json");
    const findUser = users.find((user) => user.id === id);
    return findUser;
  }

  async searchUser(query) {
    const users = await this.fileSystem.readFile("users.json");
    const findUser = users.find((user) => user.username === query.username);
    return findUser;
  }
}

export default userService;
