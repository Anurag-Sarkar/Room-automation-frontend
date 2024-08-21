import axios from 'axios';

// Create an instance of axios with custom config
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your base URL
  timeout: 10000, // Timeout for requests in milliseconds
});

export default axiosInstance;