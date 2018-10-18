import http from '../assets/utils/http';

export const testApi = (params = {}) => {
    const url = '/mgr/trade/test';
    return http.get(url, {
        params
    })
};