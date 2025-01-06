import http from "http";
import fs from "node:fs/promises";
import path from "node:path";

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url;
  if (reqUrl === "/style.css") {
    const stylePath = path.join(process.cwd(), "style.css");
    const style = await fs.readFile(stylePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(style);
  } else if (reqUrl === "/") {
    const activePath = path.join(process.cwd(), "index.html");
    const index = await fs.readFile(activePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server 3000-portda ishlayapti...");
});
