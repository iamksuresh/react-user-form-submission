import axios from 'axios';

const AXIOS = axios.create({
    //baseURL: 'https://webhook.site/c5c76877-e804-4b4d-b9eb-fdb2c8077ad9',
    //baseURL : './',
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
    }, (error) => {
        return Promise.reject(error);
    }
  )

  export default AXIOS;