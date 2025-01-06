import http from "http";

const server = http.createServer((req, res) => {
  const reqUrl = req.url;

  if (reqUrl === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Salom, bu Bosh Sahifa!</h1><p>Bu yerda saytning asosiy ma'lumotlari bo'ladi.</p>"
    );
  } else if (reqUrl === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About</h1><p>Bizning kompaniya haqida ma'lumotlar.</p>");
  } else if (reqUrl === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Aloqa</h1><p>Biz bilan bog'lanish uchun telefon yoki elektron pochta orqali murojaat qiling.</p>"
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Sahifa topilmadi");
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server 3000-portda ishlayapti...");
});
