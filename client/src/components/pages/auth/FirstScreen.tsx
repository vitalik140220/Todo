import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const FirstScreen: FC = () => {
	const navigation = useHistory();
	return (
		<div className='firstScreen'>
			<div className='firstScreen__conteiner'>
				<div className='firstScreen__register'>
					<button onClick={() => navigation.push("/register")}>Register</button>
				</div>
				<div className='firstScreen__login'>
					<button onClick={() => navigation.push("/login")}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default FirstScreen;
