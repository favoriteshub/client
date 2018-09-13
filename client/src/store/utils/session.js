import * as API from "./api";
import router from "@/router/router";

export function isAuthenticated() {
  let token = localStorage.getItem("token");
  let refreshToken = localStorage.getItem("refreshToken");
  return token !== null && refreshToken !== null;
}

export function saveTokensInStorage(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("refreshToken", data.refreshToken);
  API.setHeader(data.token);
}

export function removeTokensfromStorage() {
  localStorage.clear();
  API.setHeader();
}

export function refreshTokens() {
  let data = {token: localStorage.getItem("token"), refreshToken: localStorage.getItem("refreshToken")};

  return API.post(
    "/auth/refresh",
    data,
    (resolve) => {
      saveTokensInStorage(resolve.data);
    },
    (reject) => {
      router.push("/logout");
      throw reject;
    }
  );
}
