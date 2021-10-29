import User from "../models/User";
import { IUser } from "../models/User";
export default class UserService {
	async register({ email, password }: IUser) {
		const candidate = await User.findOne({ email });
		if (candidate) {
			return false;
		}
		const user = new User({ email, password });
		await user.save();
		return user;
	}

	async login({ email }: any) {
		const user = await User.findOne({ email });
		await user?.save();
		return user;
	}
}
