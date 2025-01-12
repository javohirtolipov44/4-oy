import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();
const controller = new userController();

userRouter.get("/api/users", (req, res) => {
  return controller.getAllUsersController(req, res);
});

userRouter.post("/api/user", (req, res) => {
  return controller.addUserController(req, res);
});

userRouter.get("/api/users/active", (req, res) => {
  return controller.getActiveUsersController(req, res);
});

userRouter.get("/api/users/:id", (req, res) => {
  return controller.getOneUserController(req, res);
});

userRouter.post("/api/users/search", (req, res) => {
  return controller.searchUserController(req, res);
});

export default userRouter;
