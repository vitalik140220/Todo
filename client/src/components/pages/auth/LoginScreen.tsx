import React, { FC, useContext, useState } from "react";
import InputComponent from "./InputComponent";
import { AuthContext } from "../../../context/AurhContext";
import { useHttp } from "../../../hooks/http.hook";
import { useEffect } from "react";
import { useMessage } from "../../../hooks/message.hook";

const LoginScreen: FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = useContext(AuthContext);
	const { request, error, clearError } = useHttp();
	const message = useMessage();
	useEffect(() => {
		message(error);
		clearError();
	}, [error, message, clearError]);

	const buttonHandler = async () => {
		const data: any = await request({
			url: "http://localhost:5000/api/user/login",
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log("data" + data);
		data !== undefined && auth.login(data.token, data.userId);
		//auth.logout();
		setEmail("");
		setPassword("");
	};

	return (
		<div className='login-screen'>
			<div className='login-screen__container'>
				<div className='login-screen__title'>Login</div>
				<div className='login-screen__email'>
					<InputComponent
						titleText='Email'
						placeholderText='Input eout Email'
						state={email}
						setState={setEmail}
					/>
				</div>
				<div className='login-screen__password'>
					<InputComponent
						titleText='Password'
						placeholderText='Input your password'
						state={password}
						setState={setPassword}
					/>
				</div>
				<div className='login-screen__btn'>
					<button onClick={() => buttonHandler()}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
