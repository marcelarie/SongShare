import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropzone from '../Dropzone';

import {
    uploadSong,
    uploadSongRequest,
} from '../../redux/uploader/uploader-actions';
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

    const [title, setTitle] = useState('');
    const [file, setFile] = useState();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            uploadSong({
                file,
                title,
            }),
        );
    };

    function handleSetTitle(e) {
        setTitle(e.target.value);
    }

    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    useEffect(() => {
        dispatch(uploadSongRequest);
    }, [title]);

    return (
        <div className="upload-song">
            <h1>Upload Song</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleSetTitle}
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
