import http from "http";
import fs from "node:fs/promises";
import path from "node:path";

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url;
  if (reqUrl === "/users") {
    const activePath = path.join(process.cwd(), "users.json");
    const users = JSON.parse(await fs.readFile(activePath));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server 3000-portda ishlayapti...");
});
