import { interceptorError } from './interceptorError';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URL_BACKEND_NODE,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api: AxiosInstance = axios.create(defaultConfig);

api.interceptors.response.use((res) => {
  return res;
}, interceptorError);
