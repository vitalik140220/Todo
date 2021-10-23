import { Model, model, Schema } from "mongoose";

export interface IUser {
	email: string;
	password: string;
}

const schema = new Schema({
	email: {
		type: String,
		unique: true,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const User: Model<IUser> = model("User", schema);
export default User;
