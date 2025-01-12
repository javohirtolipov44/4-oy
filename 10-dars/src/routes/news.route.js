import { Router } from "express";
import newsController from "../controllers/news.controller.js";

const newsRouter = Router();
const controller = new newsController();

newsRouter.get("/news", (req, res) => {
  return controller.getAllNewsController(req, res);
});

newsRouter.get("/news/category/:name", (req, res) => {
  return controller.getNewsByCategoryController(req, res);
});

newsRouter.get("/news/:id", (req, res) => {
  return controller.getNewsByIdController(req, res);
});

newsRouter.post("/news", (req, res) => {
  return controller.addNewsController(req, res);
});

newsRouter.get("/news/content/search", (req, res) => {
  return controller.searchNewsController(req, res);
});

export default newsRouter;
