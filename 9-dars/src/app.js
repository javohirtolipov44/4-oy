import express from "express";
import Routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(...Routes());

app.listen(4000, () => {
  console.log("server ishga tushdi");
});
