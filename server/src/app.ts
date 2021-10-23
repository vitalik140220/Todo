import express from "express";
import AppRoutes from "./routes/index";

const app = express();

const routes = new AppRoutes(app);
routes.init();

app.listen(5000, () => {
	console.log("Sever has been starter");
});
