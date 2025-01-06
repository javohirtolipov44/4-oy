import http from "http";
import fs from "node:fs/promises";
import path from "node:path";

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url;
  if (reqUrl === "/style.css") {
    const stylePath = path.join(process.cwd(), "public", "style.css");
    const style = await fs.readFile(stylePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(style);
  } else if (reqUrl === "/") {
    const activePath = path.join(process.cwd(), "public", "index.html");
    const index = await fs.readFile(activePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  } else if (reqUrl === "/nodejs.png") {
    const activePath = path.join(process.cwd(), "public", "nodejs.png");
    const image = await fs.readFile(activePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(image);
  }
});

server.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti...");
});
