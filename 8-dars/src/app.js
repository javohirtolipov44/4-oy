import express from "express";

const app = express();

const products = [
  { id: 1, name: "iPhone 13", price: 999, category: "phone" },
  { id: 2, name: "MacBook Pro", price: 1299, category: "laptop" },
  { id: 3, name: "iPad Air", price: 599, category: "tablet" },
  { id: 4, name: "Samsung S21", price: 899, category: "phone" },
  { id: 5, name: "Dell XPS", price: 1199, category: "laptop" },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const param = req.params;
  const data = products.filter((product) => product.id === parseInt(param.id));
  res.send(data);
  console.log(param);
});

app.get("/api/products/category/:name", (req, res) => {
  const param = req.params;
  const data = products.filter((product) => product.category === param.name);
  res.send(data);
});

app.get("/api/product/search", (req, res) => {
  const query = req.query;
  const data = products.filter((product) => product.category === query.q);
  res.send(data);
});

app.listen(4000, () => {
  console.log("server ishga tushdi");
});
