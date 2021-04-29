import * as UploaderTypes from './uploader-types';
import { getFileUrl, fileTypes } from '../../services/cloudinary';
import api from '../../api';
import { getCurrentUserToken } from '../../services/auth';

export const uploadSongRequest = () => ({
    type: UploaderTypes.UPLOAD_SONG_REQUEST,
});

export const uploadSongError = message => ({
    type: UploaderTypes.UPLOAD_SONG_ERROR,
    payload: message,
});

export const uploadSongSuccess = songUrl => ({
    type: UploaderTypes.UPLOAD_SONG_SUCCESS,
    payload: songUrl,
});

export const uploadImageRequest = () => ({
    type: UploaderTypes.UPLOAD_IMAGE_REQUEST,
});

export const uploadImageError = message => ({
    type: UploaderTypes.UPLOAD_IMAGE_ERROR,
    payload: message,
});

export const uploadImageSuccess = imageUrl => ({
    type: UploaderTypes.UPLOAD_IMAGE_SUCCESS,
    payload: imageUrl,
});

export function uploadSong({ track, title }) {
    const name = title;
    return async function uploadThunk(dispatch) {
        dispatch(uploadSongRequest());

        try {
            const userToken = await getCurrentUserToken();

            if (!userToken) {
                return dispatch(uploadSongError('User token null!'));
            }

            const urlRes = await getFileUrl({
                file: track,
                fileType: fileTypes.AUDIO,
            });

            if (urlRes.status >= 400) {
                return dispatch(uploadSongError(urlRes.statusText));
            }

            const { url, duration, bytes, format, asset_id } = urlRes.data;
            const _id = asset_id;

            const songRes = await api.createTrack({
                body: {
                    name,
                    url,
                    duration,
                    bytes,
                    format,
                    _id,
                },
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });

            if (songRes.errorMessage) {
                return dispatch(uploadSongError(songRes.errorMessage));
            }

            return dispatch(uploadSongSuccess(url));
        } catch (err) {
            return dispatch(uploadSongError(err.message));
        }
    };
}

export function uploadImage({
    file,
    name = '',
    genre = '',
    onUploadProgress = _ => {},
}) {
    return async function uploadImageThunk(dispatch) {
        dispatch(uploadImageRequest());

        try {
            const urlRes = await getFileUrl({
                file: file,
                fileType: fileTypes.IMAGE,
                onUploadProgress: onUploadProgress,
            });

            const imageUrl = urlRes.data.url;

            if (!imageUrl) {
                return dispatch(uploadImageError('error while uploading'));
            }
            return dispatch(uploadImageSuccess(imageUrl));
        } catch (err) {
            return dispatch(uploadImageError(err));
        }
    };
}
