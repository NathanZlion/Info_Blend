
import express from "express";
import { userControllers } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userControllers.register);
userRouter.post("/login", userControllers.login);
userRouter.get("/", userControllers.getUser);
userRouter.patch("/", userControllers.updateUser);
userRouter.delete("/", userControllers.deleteUser);
userRouter.get("/categories", userControllers.getCategories);

export default userRouter;