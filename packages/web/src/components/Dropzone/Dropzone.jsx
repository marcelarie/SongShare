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
    // eslint-disable-next-line no-unused-vars
    const files = acceptedFiles.map(file => (
        <li key={file.path}>{file.path}</li>
    ));

    return (
        <div>
            <section className=" mt-4 p-4 border-2 rounded-md bg-dark border-dark-light border-dashed outline-none">
                <div
                    {...getRootProps({ className: 'dropzone' })}
                    className="flex flex-col items-center p-4"
                >
                    <input {...getInputProps()} />
                    <p>Drag n drop some files here, or click to select files</p>
                </div>
            </section>
            <aside className="my-2">
                <h4 className="text-dark font-bold">Files</h4>
                <ul className="text-dark">{files}</ul>
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
