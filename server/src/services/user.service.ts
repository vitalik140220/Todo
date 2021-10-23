import User from "../models/User";
import { IUser } from "../models/User";
export default class UserService {
	async register({ email, password }: IUser) {
		const user = await new User({ email, password });
		await user.save();
		return user;
	}
}
