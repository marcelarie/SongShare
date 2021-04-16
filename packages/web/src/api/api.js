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
            headers: headers,
        });
    }

    function login(headers) {
        return request({
            url: '/login',
            requestMethod: 'GET',
            headers: headers,
        });
    }

    function useApi(username, headers, body) {
        return request({
            url: `/user/edit/${username}`,
            requestMethod: 'PATCH',
            headers,
            body,
        });
    }

    return {
        signUp: signUp,
        signOut: signOut,
        login: login,
        useApi: useApi,
    };
}

export default makeApi();
