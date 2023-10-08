import express from "express";
import { dummyUserControllers as dummyUserControllers } from "../controllers/dummy.user.controller";

const dummyUserRouter = express.Router();

dummyUserRouter.post("/register", dummyUserControllers.register);
dummyUserRouter.post("/login", dummyUserControllers.login);
dummyUserRouter.get("/getme", dummyUserControllers.getUser);
dummyUserRouter.patch("/", dummyUserControllers.updateUser);
dummyUserRouter.delete("/", dummyUserControllers.deleteUser);
dummyUserRouter.get("/categories", dummyUserControllers.getCategories);

export default dummyUserRouter;