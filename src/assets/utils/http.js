import axios from 'axios';
import qs from 'qs';

const http = axios.create({
    timeout: 15000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
});

http.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config;
}, error => {
    Promise.reject(error)
});

http.interceptors.response.use(response => {
    return response;
}, error => {
    alert(error);
    return Promise.reject(error)
});

export default http;