import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('ClubSunset.token');

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
