import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';
const api = axios.create({baseURL});

export default api;