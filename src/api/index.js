import http from '../assets/utils/http';

export const testApi = (params = {}) => {
    const url = '/test/testFace';
    return http.post(url, params)
};