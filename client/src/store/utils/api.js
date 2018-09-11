import axios from "axios";
import {refreshTokens} from "./session";

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

export function get(url, resolve, reject) {
  return API.get(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
      if (reject) {
        reject();
      }
    });
}

export function post(url, data, resolve, reject) {
  return API.post(url, data)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
      if (reject) {
        reject();
      }
    });
}

export function put(url, data, resolve, reject) {
  return API.put(url, data)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
      if (reject) {
        reject();
      }
    });
}

export function del(url, resolve, reject) {
  return API.delete(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log(error);
      if (reject) {
        reject();
      }
    });
}
