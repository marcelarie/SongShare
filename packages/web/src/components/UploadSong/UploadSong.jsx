import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import jsmediatags from 'jsmediatags';
import Dropzone from '../Dropzone';

import { uploadSong } from '../../redux/uploader/uploader-actions';
import { fileTypes } from '../../services/cloudinary';
import './styles.scss';
import '../../styles/GenericForm.scss';
import Button from '../../styles/components/Button/GenericButton';
import Input from '../../styles/components/Input/GenericInput';

function UploadSong() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const { isUploadingSong, uploadSongSuccess, uploadSongError } = useSelector(
        store => store.uploader,
    );

    const username = useSelector(store => store.user.username);

    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState(username);
    const [genre, setGenre] = useState('Generic');

    const tryToSubmit = e => {
        // e.preventDefault(); // I think there is no need to preventDefault when using useForm
        dispatch(
            uploadSong({
                file,
                title,
                artist,
                genre,
            }),
        );
    };

    async function handleSetFile(uploadFile) {
        jsmediatags.read(uploadFile, {
            onSuccess: tags => {
                tags.title && setTitle(tags.title);
                tags.artist && setTitle(tags.artist);
                tags.genre && setTitle(tags.genre);
            },
            // onError: error => console.log(error),
        });
        setFile(uploadFile);
    }

    return (
        <div className="upload-song">
            <h1>Upload Song</h1>
            <form
                className="form-container"
                onSubmit={handleSubmit(tryToSubmit)}
            >
                <label htmlFor="title">Title</label>
                <Input
                    {...register('title', { required: true })}
                    type="text"
                    id="title"
                    onChange={e => setTitle(e.target.value)}
                    placeholder={title || 'add a title'}
                    hasFeedback
                />
                {errors.title && <p>Please, enter a song title</p>}
                <label htmlFor="artist">Artist</label>
                <Input
                    type="text"
                    id="artist"
                    onChange={e => setArtist(e.target.value)}
                    placeholder={artist}
                />

                <label htmlFor="genre">Genre</label>
                <Input
                    type="text"
                    id="genre"
                    onChange={e => setGenre(e.target.value)}
                    placeholder={genre}
                />

                <Dropzone
                    fileType={fileTypes.AUDIO}
                    onFileSelected={files => {
                        handleSetFile(files[0]);
                    }}
                />
                <div className="upload-song__messages">
                    {isUploadingSong && <p>Uploading song...</p>}
                    {uploadSongSuccess && file && <p>Upload successful!</p>}
                    {uploadSongError && <p>Upload error!</p>}
                </div>

                <Button type="submit">Upload</Button>
            </form>
        </div>
    );
}

export default UploadSong;
