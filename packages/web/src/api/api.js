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

    function getSongByID(headers, songID) {
        return request({
            url: `/song/${songID}`,
            requestMethod: 'GET',
            headers,
        });
    }

    function addLike(headers, songID) {
        return request({
            url: `/song/like/${songID}`,
            requestMethod: 'POST',
            headers,
        });
    }

    function editSong(headers, body, songID) {
        return request({
            url: `/song/${songID}`,
            requestMethod: 'PATCH',
            headers,
            body,
        });
    }

    function deleteSong(headers, songID) {
        return request({
            url: `/song/${songID}`,
            requestMethod: 'DELETE',
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
        getSongByID,
        editSong,
        addLike,
        deleteSong,
    };
}

export default makeApi();
