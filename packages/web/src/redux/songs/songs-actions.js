import * as SongsTypes from './songs-types';
import api from '../../api';
import * as auth from '../../services/auth';

export function getAllSongs() {
    return async function getAllSongsThunk(dispatch) {
        dispatch(getAllSongsRequest());
        try {
            const token = await auth.getCurrentUserToken();

            const response = api.getSongs({
                Authorization: `Bearer ${token}`,
            });

            dispatch(getAllSongsSucces(response));
        } catch (error) {
            dispatch(getAllSongsError(error));
        }
    };
}

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
