import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users',
 api = axios.create({baseURL});

export default api;