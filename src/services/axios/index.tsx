import axios from 'axios';

const AXIOS = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

AXIOS.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AXIOS;
