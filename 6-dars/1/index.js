import http, { request } from "http";
import url from "url";
import { parse } from "querystring";

let users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

let posts = [
  { id: 1, userId: 1, title: "Post 1", content: "Content for post 1" },
  { id: 2, userId: 2, title: "Post 2", content: "Content for post 2" },
];

const server = http.createServer((request, response) => {
  const method = request.method;
  const pathName = request.url;
  if (pathName.startsWith("/users")) {
    if (method === "GET") {
      response.end(JSON.stringify(users));
    } else if (method === "POST") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        const newUser = JSON.parse(body);
        newUser.id = users.length + 1;
        users.push(newUser);
        response.end(JSON.stringify(users));
        console.log(newUser);
      });
    } else if (method === "PUT") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        const updatedUser = JSON.parse(body);
        const index = users.findIndex((user) => user.id === updatedUser.id);
        users[index] = updatedUser;
        response.end(JSON.stringify(updatedUser));
      });
    } else if (method === "DELETE") {
      const id = parseInt(pathName.split("/")[2], 10);
      users = users.filter((user) => user.id !== id);
      response.end(JSON.stringify({ message: `${id}-id o'chirildi` }));
    }
  }
});

server.listen(4000, "localhost", () => {
  console.log("Server ishga tushdi http://localhost:4000");
});
