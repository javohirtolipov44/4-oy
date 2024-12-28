const url = new URL("https://www.example.com:8080/path");

const domain = url.hostname;
const port = url.port;

console.log("Domain:", domain);
console.log("Port:", port);
