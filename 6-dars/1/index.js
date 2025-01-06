import http, { request } from "http";

let users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

const server = http.createServer((request, response) => {
  const method = request.method;
  const pathName = request.url;
  if (pathName.startsWith("/users")) {
    if (method === "GET") {
      //http://localhost:4000/users
      response.end(JSON.stringify(users));
    } else if (method === "POST") {
      //http://localhost:4000/users  &&   {"name" : "Javohir","age" : 25}
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        const newUser = JSON.parse(body);
        newUser.id = users.length + 1;
        users.push(newUser);
        response.end(JSON.stringify(users));
        console.log("User qo'shildi\n", newUser);
      });
    } else if (method === "PUT") {
      //http://localhost:4000/users  &&   {"id" : 3,"name" : "Javohir","age" : 30}
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        const updatedUser = JSON.parse(body);
        const index = users.findIndex((user) => user.id === updatedUser.id);
        users[index] = updatedUser;
        response.end(JSON.stringify(updatedUser));
        console.log("User o'zgartirildi\n", updatedUser);
      });
    } else if (method === "DELETE") {
      //http://localhost:4000/users/3
      const id = parseInt(pathName.split("/")[2], 10);
      users = users.filter((user) => user.id !== id);
      response.end(JSON.stringify({ message: `${id}-id o'chirildi` }));
    }
  }
});

server.listen(4000, "localhost", () => {
  console.log("Server ishga tushdi http://localhost:4000");
});
