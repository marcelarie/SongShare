import React from 'react';
import { useSelector } from 'react-redux';
import { string, func } from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { fileTypes } from '../../services/cloudinary';
import Drop from './styles';

function Dropzone({ fileType, onFileSelected }) {
    const uploader = useSelector(store => store.uploader);
    const songState = {
        uploading: uploader.isUploadingSong,
        success: uploader.uploadSongSuccess,
        error: uploader.uploadSongError,
    };
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: fileType === fileTypes.AUDIO ? 'audio/*' : 'image/*',
        maxFiles: 1,
        onDropAccepted: onFileSelected,
    });
    // eslint-disable-next-line no-unused-vars
    const files = acceptedFiles.map(file => (
        <li key={file.path}>{file.path}</li>
    ));

    return (
        <Drop songState={songState} className="dropzone">
            <section className="dropzone_area">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag & drop some files here, or click to select files</p>
                </div>
            </section>
            <aside className="dropzone_controls">
                <ul>{files}</ul>
            </aside>
        </Drop>
    );
}

Dropzone.propTypes = {
    fileType: string.isRequired,
    onFileSelected: func,
};

Dropzone.defaultProps = {
    onFileSelected: _ => {},
};

export default Dropzone;
