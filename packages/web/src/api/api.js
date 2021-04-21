import { makeRequest } from './api-utils';

function makeApi(request = makeRequest()) {
    function signUp(headers, body) {
        return request({
            url: '/sign-up',
            requestMethod: 'POST',
            headers,
            body,
        });
    }

    function signOut(headers) {
        return request({
            url: '/sign-out',
            requestMethod: 'POST',
            headers,
        });
    }

    function login(headers) {
        return request({
            url: '/login',
            requestMethod: 'GET',
            headers,
        });
    }

    function useApi(headers, body) {
        return request({
            url: `/user/edit`,
            requestMethod: 'PATCH',
            headers,
            body,
        });
    }

    function createTrack({ body, headers = {} }) {
        return request({
            url: '/song',
            requestMethod: 'POST',
            body,
            headers,
        });
    }

    function getSongs(headers) {
        return request({
            url: '/songs/all',
            requestMethod: 'GET',
            headers,
        });
    }

    return {
        signUp,
        signOut,
        login,
        useApi,
        createTrack,
        getSongs,
    };
}

export default makeApi();
