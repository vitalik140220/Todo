import { useCallback, useState } from "react";

interface IUseHttp {
	method: string;
	body: any;
	headers: any;
	url: string;
}

export const useHttp = () => {
	const [error, setError] = useState("");

	const request = useCallback(
		async ({ method, body, headers, url }: IUseHttp) => {
			try {
				const response = await fetch(url, { body, method, headers });
				const data: any = await response.json();
				if (!response.ok) {
					throw new Error(data.message || "Bed");
				}
				return data;
			} catch (e: any) {
				setError(e.message);
			}
		},
		[],
	);
	const clearError = useCallback(() => setError(""), []);
	return { request, error, clearError };
};
