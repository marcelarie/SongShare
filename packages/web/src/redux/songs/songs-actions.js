import * as SongsTypes from './songs-types';
import api from '../../api';
import * as auth from '../../services/auth';

export const getAllSongsRequest = () => ({
    type: SongsTypes.SONGS_REQUEST,
});

export const getAllSongsSucces = payload => ({
    type: SongsTypes.SONGS_SUCCES,
    payload,
});

export const getAllSongsError = error => ({
    type: SongsTypes.SONGS_ERROR,
    payload: error,
});

export function getAllSongs() {
    return async function getAllSongsThunk(dispatch) {
        dispatch(getAllSongsRequest());
        try {
            const token = await auth.getCurrentUserToken();

            const response = await api.getSongs({
                Authorization: `Bearer ${token}`,
            });

            return dispatch(getAllSongsSucces(response.data.data));
        } catch (error) {
            return dispatch(getAllSongsError(error));
        }
    };
}
