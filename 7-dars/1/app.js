import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Salom, Node.js Server!");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server 3000-portda ishlayapti...");
});
