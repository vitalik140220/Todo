import express from "express";
import { json } from "body-parser";
import AppRoutes from "./routes/index";
import cors from "cors";
import connectDB from "./config/database";

const app = express();
connectDB();
app.use(json());
app.use(
	cors({
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
		origin: "*",
	}),
);

const routes = new AppRoutes(app);
routes.init();

app.listen(5000, () => {
	console.log("Sever has been starter");
});
