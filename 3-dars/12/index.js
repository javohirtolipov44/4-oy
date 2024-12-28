const url = new URL("https://user:pass@example.com:8080/path?query=value");

const protocol = url.protocol;
const login = url.username;
const password = url.password;
const domain = url.hostname;
const port = url.port;
const path = url.pathname;
const query = url.search;

console.log("Protokol:", protocol);
console.log("Login:", login);
console.log("Parol:", password);
console.log("Domain:", domain);
console.log("Port:", port);
console.log("Yo'l:", path);
console.log("Query:", query);
