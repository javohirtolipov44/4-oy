import http from "http";
import fs from "node:fs/promises";
import path from "node:path";

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url;
  if (reqUrl.startsWith("/images")) {
    const imagePath = path.join(process.cwd(), "image", "nodejs.png");
    const image = await fs.readFile(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(image);
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server 3000-portda ishlayapti...");
});
