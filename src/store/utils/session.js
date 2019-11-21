export function getToken() {
	return localStorage.getItem("token");
}

export function getRefreshToken() {
	return localStorage.getItem("refreshToken");
}

export function isAuthenticated() {
	const token = getToken();
	const refreshToken = getRefreshToken();

	return token !== null && refreshToken !== null;
}

export function saveTokensInStorage(token, refreshToken) {
	localStorage.setItem("token", token);
	localStorage.setItem("refreshToken", refreshToken);
}

export function removeTokensfromStorage() {
	localStorage.clear();
}
