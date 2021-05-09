import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import jsmediatags from 'jsmediatags';
import Dropzone from '../Dropzone';

import { uploadSong } from '../../redux/uploader/uploader-actions';
import { fileTypes } from '../../services/cloudinary';
import './styles.scss';
import '../../styles/GenericForm.scss';
import Button from '../../styles/components/Button/GenericButton';
import Input from '../../styles/components/Input/GenericInput';

function UploadSong() {
    const dispatch = useDispatch();
    const { isUploadingSong, uploadSongSuccess, uploadSongError } = useSelector(
        store => store.uploader,
    );

    const username = useSelector(store => store.user.username);

    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState(username);
    const [genre, setGenre] = useState('Generic');

    const handleSubmit = e => {
        e.preventDefault();
        title
            ? dispatch(
                  uploadSong({
                      file,
                      title,
                      artist,
                      genre,
                  }),
              )
            : alert('inavlid title');
    };

    async function handleSetFile(uploadFile) {
        jsmediatags.read(uploadFile, {
            onSuccess: tags => console.log(tags),
            onError: error => console.log(error),
        });
        setFile(uploadFile);
    }

    return (
        <div className="upload-song">
            <h1>Upload Song</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <Input
                    type="text"
                    id="title"
                    onChange={e => setTitle(e.target.value)}
                    placeholder={title ? '' : 'add a title'}
                />

                <label htmlFor="artist">Artist</label>
                <Input
                    type="text"
                    id="artist"
                    onChange={e => setArtist(e.target.value)}
                    placeholder={username}
                />

                <label htmlFor="genre">Genre</label>
                <Input
                    type="text"
                    id="genre"
                    onChange={e => setGenre(e.target.value)}
                    placeholder="Generic"
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
