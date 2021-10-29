import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const login = useCallback((jwttoken, id) => {
		setToken(jwttoken);
		setUserId(id);
		localStorage.setItem(
			"users",
			JSON.stringify({ userId: id, token: jwttoken }),
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		localStorage.removeItem("users");
	}, []);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("users")!);
		if (data && data.token) {
			login(data.token, data.userId);
		}
	}, [login]);

	return { login, logout, token, userId };
};
