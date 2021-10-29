import { check } from "express-validator";

class Validator {
	validationRegister() {
		return [
			check("email", "Input your Email").isLength({ min: 1 }),
			check("email", "Is not Email").isEmail(),
			check("password", "Password must have at least 6 characters").isLength({
				min: 6,
			}),
		];
	}
	validationLogin() {
		return [
			check("email", "Input email").isLength({ min: 1 }),
			check("email", "Is not Email").isEmail(),
			check("password", "Password must have at least 6 characters").isLength({
				min: 6,
			}),
		];
	}
}
const validation = new Validator();
export default validation;
