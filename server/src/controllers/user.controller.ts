import UserService from "../services/user.service";
import { Response, Request } from "express";
import { IUser } from "../models/User";

export class UserController {
	constructor(private userService: UserService) {}
	async register(req: Request, res: Response) {
		try {
			const { email, password }: IUser = req.body;
			const user = await this.userService.register({ email, password });
			res.status(201).json({ message: "User created", user });
		} catch (e) {
			res.status(500).json({ message: "Error" });
		}
	}
}
const userController = new UserController(new UserService());
export default userController;
