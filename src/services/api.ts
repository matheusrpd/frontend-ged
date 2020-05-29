/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const ticket = localStorage.getItem('@GED:ticket');

  if (ticket) {
    config.headers.Authorization = `Bearer ${ticket}`;
  }

  return config;
});

export default api;
