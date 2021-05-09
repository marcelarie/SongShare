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
    function getUserInfo(headers) {
        return request({
            url: `/user`,
            requestMethod: 'GET',
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

    function getUserSongs(headers, userId) {
        return request({
            url: `/songs/all-from/${userId}`,
            requestMethod: 'GET',
            headers,
        });
    }

    function getLikedSongs(headers, id) {
        return request({
            url: `/user/all-likes/${id}}`,
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

    function EditSong(headers, body, songID) {
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

    /* PLAYLISTS */
    function AllPlaylists(headers) {
        return request({
            url: `/playlists/all`,
            requestMethod: 'GET',
            headers,
        });
    }

    function getPlaylistById(headers, playlistID, withSongsInfo) {
        return request({
            url: `/playlist/${playlistID}?withSongsInfo=${withSongsInfo}`,
            requestMethod: 'GET',
            headers,
        });
    }

    function createPlaylist(headers, body) {
        return request({
            url: `/newplaylist`,
            requestMethod: 'POST',
            headers,
            body,
        });
    }

    function updatePlaylist(headers, body, playlistID) {
        return request({
            url: `/playlist/${playlistID}`,
            requestMethod: 'PATCH',
            headers,
            body,
        });
    }

    function addSongs(headers, body, playlistID) {
        return request({
            url: `/playlist/addSongs/${playlistID}`,
            requestMethod: 'PATCH',
            headers,
            body,
        });
    }

    function addLikePlaylist(headers, playlistID) {
        return request({
            url: `/playlist/like/${playlistID}`,
            requestMethod: 'POST',
            headers,
        });
    }

    function getOtherUser(headers, username) {
        return request({
            url: `/username/${username}`,
            requestMethod: 'GET',
            headers,
        });
    }

    return {
        signUp,
        signOut,
        login,
        useApi,
        getUserInfo,

        createTrack,
        getSongs,
        getUserSongs,
        getLikedSongs,
        getSongByID,
        EditSong,
        addLike,
        deleteSong,

        createPlaylist,
        AllPlaylists,
        getPlaylistById,
        updatePlaylist,
        addSongs,
        addLikePlaylist,

        getOtherUser,
    };
}

export default makeApi();
