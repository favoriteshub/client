import axios from "axios";
import {refreshTokens} from "../utils/auth";

const API = axios.create({
  baseURL: `http://localhost:3000/api`
});

API.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
    return refreshTokens().then(() => {
      error.config.__isRetryRequest = true;
      return API(error.config);
    });
  }
  return Promise.reject(error);
});

export function setHeader(token) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function get(url, resolve) {
  return API.get(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post(url, data, resolve) {
  return API.post(url, data)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function put(url, data, resolve) {
  return API.put(url, data)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function del(url, resolve) {
  return API.delete(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
