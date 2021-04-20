import React from 'react';
import { string, func } from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { fileTypes } from '../../services/cloudinary';

function Dropzone({ fileType, onFileSelected }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: fileType === fileTypes.AUDIO ? 'audio/*' : 'image/*',
        maxFiles: 1,
        onDropAccepted: onFileSelected,
    });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>{file.path}</li>
    ));

    return (
        <div>
            <section>
                <div {...getRootProps({ className: 'dropzone' })} className="">
                    <input {...getInputProps()} />
                    <p>Drag n drop some files here, or click to select files</p>
                </div>
            </section>
            <aside className="my-2">
                <h4 className="">Files</h4>
                <ul className="">{files}</ul>
            </aside>
        </div>
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
