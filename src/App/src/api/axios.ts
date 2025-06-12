import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7248',  // adjust to match your backend port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;