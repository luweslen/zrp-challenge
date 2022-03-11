import axios from 'axios';
import { API_URL } from '../configs/Environment';

console.log(API_URL);
const API = axios.create({
  baseURL: API_URL,
});

export default API;
