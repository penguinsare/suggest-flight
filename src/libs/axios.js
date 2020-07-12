import axios from 'axios';

const instance = axios.create({
  //baseURL: 'http://localhost:8081',
  baseURL: 'http://flights.polytech-software.com',
});

export default instance;
