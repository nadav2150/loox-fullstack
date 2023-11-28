import axios from "axios";

// development URL
const baseURL = 'http://localhost:3000';


const api = axios.create({
  baseURL,
});

const apiService = {
  get: (url) => api.get(url),
  post: (url, data) =>
    api.post(url, data),
  patch: (url ,data) =>
    api.patch(url, data),
  delete: (url) => api.delete(url),
};

export default apiService;
