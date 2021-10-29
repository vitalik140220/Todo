import config from "config";
import { connect } from "mongoose";

const connectDB = async () => {
	try {
		const mongoURI: string =
			"mongodb+srv://Vitalik:z1x2c3@cluster0.kkajj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
		const options: any = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		await connect(mongoURI, options);
		// tslint:disable-next-line:no-console
		console.log("MongoDB Connected...");
	} catch (err: any) {
		// tslint:disable-next-line:no-console
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
