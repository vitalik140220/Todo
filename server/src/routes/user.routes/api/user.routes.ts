import { Router, Response, Request } from "express";
import userController from "../../../controllers/user.controller";
import UserService from "../../../services/user.service";

const userRouter = Router();

userRouter.post("/register", userController.register.bind(userController));

export default userRouter;
