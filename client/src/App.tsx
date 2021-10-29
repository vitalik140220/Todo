import "./styles/style.css";
import "materialize-css";

import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes.hook";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./context/AurhContext";

function App() {
	const { token, login, logout, userId } = useAuth();
	const isAuth = !!token;
	const routes = useRoutes(isAuth);
	return (
		<AuthContext.Provider value={{ token, login, logout, userId }}>
			<Router>{routes}</Router>
		</AuthContext.Provider>
	);
}

export default App;
