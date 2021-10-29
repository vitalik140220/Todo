import UserService from "../services/user.service";
import { Response, Request } from "express";
import { IUser } from "../models/User";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

export class UserController {
	constructor(private userService: UserService) {}
	async register(req: Request, res: Response) {
		try {
			const error = validationResult(req);
			if (!error.isEmpty()) {
				res.status(400).json({ message: "Error", errors: error.array() });
				return;
			}
			const { email, password }: IUser = req.body;
			const hashedPassword = await bcrypt.hash(password, 12);
			const user = await this.userService.register({
				email,
				password: hashedPassword,
			});
			!user && res.status(400).json({ message: "User exists", user });
			res.status(201).json({ message: "User created" });
		} catch (e) {
			res.status(500).json({ message: "Error" });
		}
	}

	async login(req: Request, res: Response) {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ message: "Error", errors: error.array() });
			return;
		}
		const { email, password }: IUser = req.body;
		const user = await this.userService.login({ email });
		if (!user) {
			res.status(400).json({ message: "No email" });
			return;
		}
		const isMatch = await bcrypt.compare(password, user?.password);
		!isMatch && res.status(400).json({ message: "Wrong password" });
		const token = jwt.sign({ email }, "jwtSecret", {
			expiresIn: "1h",
		});
		res.json({ token, userId: user.id });
	}
}
const userController = new UserController(new UserService());
export default userController;
