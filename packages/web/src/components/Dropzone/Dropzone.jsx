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
        <>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div
                    {...getRootProps({ className: 'dropzone' })}
                    className="space-y-1 text-center"
                >
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                            <span>Upload a file</span>
                            {/* <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                        /> */}
                            <input {...getInputProps()} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                        {fileType === fileTypes.AUDIO
                            ? 'MP3, MP4, WMA '
                            : 'PNG, JPG, GIF '}
                        up to 10MB
                    </p>
                </div>
            </div>
            <aside className="my-2">
                <h4 className="text-dark font-bold">Files</h4>
                <ul className="text-dark">{files}</ul>
            </aside>
        </>
    );

    // return (
    //     <div>
    //         <section className=" mt-4 p-4 border-2 rounded-md bg-dark border-dark-light border-dashed outline-none">
    //             <div
    //                 {...getRootProps({ className: 'dropzone' })}
    //                 className="flex flex-col items-center p-4"
    //             >
    //                 <input {...getInputProps()} />
    //                 <p>Drag n drop some files here, or click to select files</p>
    //             </div>
    //         </section>
    //         <aside className="my-2">
    //             <h4 className="text-dark font-bold">Files</h4>
    //             <ul className="text-dark">{files}</ul>
    //         </aside>
    //     </div>
    // );
}

Dropzone.propTypes = {
    fileType: string.isRequired,
    onFileSelected: func,
};

Dropzone.defaultProps = {
    onFileSelected: _ => {},
};

export default Dropzone;
