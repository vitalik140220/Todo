import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FirstScreen from "./components/pages/auth/FirstScreen";
import LoginScreen from "./components/pages/auth/LoginScreen";
import RegisterScreen from "./components/pages/auth/RegisterScreen";

export const useRoutes = (isAuth: Boolean) => {
	if (!isAuth) {
		return (
			<Switch>
				<Route path='/' exact>
					<FirstScreen />
				</Route>
				<Route path='/register'>
					<RegisterScreen />
				</Route>
				<Route path='/login'>
					<LoginScreen />
				</Route>
				<Redirect to='/' />
			</Switch>
		);
	}
	return (
		<div className='div'>
			<button onClick={() => window.M.toast({ html: "toast" })}>Clicl</button>
		</div>
	);
};
