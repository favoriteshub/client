export function getToken() {
	return localStorage.getItem("token");
}

export function getRefreshToken() {
	return localStorage.getItem("refreshToken");
}

export function isAuthenticated() {
	let token = getToken();
	let refreshToken = getRefreshToken();
	return token !== null && refreshToken !== null;
}

export function saveTokensInStorage(data) {
	localStorage.setItem("token", data.token);
	localStorage.setItem("refreshToken", data.refreshToken);
}

export function removeTokensfromStorage() {
	localStorage.clear();
}
