import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:3000/api`
});

export function setHeader(token) {
  API.defaults.headers.common["Authorization"] = token;
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
