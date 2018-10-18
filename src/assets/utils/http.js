import axios from 'axios';
import Toast from '../../components/Toast';

const http = axios.create({
    timeout: 15000,
});

http.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error)
});

http.interceptors.response.use(response =>{
    return response;
},error=>{
    Toast.error(error);
    return Promise.reject(error)
});

export default http;