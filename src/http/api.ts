import axios from "axios";

const api = axios.create({
  baseURL: "",
});

api.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
      }
      return Promise.reject(error.response);
    }

    return Promise.reject(error);
  }
);

export default api;
