import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPlaylist } from '../../redux/Playlists/playlists-actions';

function CreatePlaylist() {
    const { PlaylistUpdating, PlaylistUpdatingError } = useSelector(
        store => store.playlists,
    );
    const author = useSelector(store => store.user.username);
    const userID = useSelector(store => store.user._id);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createPlaylist({ title, userID, publicAccess, type, songs }));
    };

    const [title, setTitle] = useState('');
    const [type, setType] = useState('Playlist');
    const [publicAccess, setPublicAccess] = useState(false);
    const songs = ["95b67a5f307b28980f9d3cb87a4068e0", "57ebca9c29e7fb5c2647378415d9a82d"]

    return (
        <>
            <div>
                <h2>CreatePlaylist</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" className="form-label text-dark">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label htmlFor="author" className="form-label text-dark">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        className="form-input"
                        value={author}
                        disabled
                    />
                    <label
                        htmlFor="publicAccess"
                        className="form-label text-dark"
                    >
                        Public
                    </label>
                    <input
                        type="radio"
                        id="playlistAccessPublic"
                        className="form-input"
                        name="publicAccess"
                        value="false"
                        defaultChecked
                        onChange={() => setPublicAccess(true)}
                    />
                    <label
                        htmlFor="publicAccess"
                        className="form-label text-dark"
                    >
                        Private
                    </label>
                    <input
                        type="radio"
                        id="playlistAccessPrivate"
                        className="form-input"
                        name="publicAccess"
                        value="true"
                        onChange={() => setPublicAccess(false)}
                    />
                    <label htmlFor="type" className="form-label text-dark">
                        Playlist
                    </label>
                    <input
                        type="radio"
                        id="typePlaylist"
                        className="form-input"
                        name="type"
                        value="Playlist"
                        defaultChecked
                        onChange={() => setType('Playlist')}
                    />
                    <label htmlFor="type" className="form-label text-dark">
                        Album
                    </label>
                    <input
                        type="radio"
                        id="typeAlbum"
                        className="form-input"
                        name="type"
                        value="Album"
                        onChange={() => setType('Album')}
                    />

                    <button className="btn btn-primary w-full" type="submit">
                        Create
                    </button>
                </form>

                {PlaylistUpdating && (
                    <p className="text-dark">Creating playlist</p>
                )}
                {PlaylistUpdatingError && (
                    <p className="text-dark">
                        There was an error: {PlaylistUpdatingError}
                    </p>
                )}
                {!PlaylistUpdating && !PlaylistUpdatingError && (
                    <p className="text-dark">
                        The playlist has been created successfull
                    </p>
                )}
            </div>
        </>
    );
}

export default CreatePlaylist;
