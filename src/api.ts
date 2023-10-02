import axios from 'axios';
import { API_URL } from './constants.ts';

const api = axios.create({
  baseURL: API_URL,
});

export const genericGet = async (url: string) => {
  const response = await api.get(url);
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error fetching ${url}: ${response.status}`);
  }
  return response.data;
}

export const genericPost = async (url: string, data: any) => {
  const response = await api.post(url, data);
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error fetching ${url}: ${response.status}`);
  }
  return response.data;
}
