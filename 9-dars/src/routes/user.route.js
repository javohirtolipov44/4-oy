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

export default userRouter;
