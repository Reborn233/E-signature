import http from '../assets/utils/http';

export const testApi = (params = {}) => {
    const url = '/Test/testFace';
    return http.post(url, params)
};