import { Router, Response, Request } from "express";
import userController from "../../../controllers/user.controller";
import UserService from "../../../services/user.service";
import validation from "../../../validation/validation";

const userRouter = Router();

userRouter.post(
	"/register",
	validation.validationRegister(),
	userController.register.bind(userController),
);
userRouter.post(
	"/login",
	validation.validationLogin(),
	userController.login.bind(userController),
);

export default userRouter;
