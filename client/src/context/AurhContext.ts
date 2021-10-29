import { createContext } from "react";

function noop() {}
function noo(jwttoken: string, id: string) {}
export const AuthContext = createContext({
	token: null,
	userId: null,
	login: noo,
	logout: noop,
});
