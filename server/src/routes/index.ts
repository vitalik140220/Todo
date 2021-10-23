import { Application, Request, Response } from "express";
import userRouter from "./user.routes/api/user.routes";

class AppRoutes {
	constructor(private app: Application) {}
	init() {
		this.app.get("/", (req: Request, res: Response) => {
			res.send("API Running)");
		});
		this.app.use("/api/user", userRouter);
	}
}

export default AppRoutes;
