import React, { FC, useState } from "react";
import InputComponent from "./InputComponent";

const RegisterScreen: FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const buttonHandler = async () => {
		const response = await fetch("http://localhost:5000/api/user/register", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setEmail("");
		setPassword("");
	};

	return (
		<div className='register-screen'>
			<div className='register-screen__container'>
				<div className='register-screen__title'>Register</div>
				<div className='register-screen__email'>
					<InputComponent
						titleText='Email'
						placeholderText='Please, input your email'
						state={email}
						setState={setEmail}
					/>
				</div>
				<div className='register-screen__password'>
					<InputComponent
						titleText='Password'
						placeholderText='Please, input your password'
						state={password}
						setState={setPassword}
					/>
				</div>
				<div className='register-screen__btn'>
					<button onClick={() => buttonHandler()}>Register</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
