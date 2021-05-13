import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';

// import Button from '../../styles/components/Button/GenericButton';
// import Input from '../../styles/components/Input/GenericInput';
import SongsListTable from '../../components/SongsListTable';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';

function PlaylistEdit() {
    const { id } = useParams();

    const playlist = useSelector(state => state.playlists.byID[id]);
    const userId = useSelector(state => state.user._id);
    const username = useSelector(state => state.user.username);

    if (!playlist) {
        return <Redirect to={`/${username}/`} />;
    }

    if (playlist.author._id !== userId) {
        return <Redirect to={`/playlist/${playlist._id}`} />;
    }

    return (
        <>
            <PlaylistViewHeader playlist={playlist} from="editableView" />
            <SongsListTable
                songsToList={playlist.songs}
                playlistID={playlist._id}
                // handlePlaySong={() => console.log('play')}
                sortable
            />
        </>
    );
}

export default PlaylistEdit;

/* <div className="PlaylistView__image">
                    <img
                        src={
                            playlist.img ||
                            'https://picsum.photos/seed/picsum/500'
                        }
                        alt="headerImg"
                        width="100%"
                    />
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    className="disable-input"
                    spellCheck="false"
                    onChange={e => setName(e.target.value)}
                />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className="song-modal__likes">
                                        <p>{songs[songID].likes.length}</p>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={
                                                songs[songID].likes
                                                    ? 'text-indigo-800'
                                                    : 'text-gray-400'
                                            }
                                            onClick={() =>
                                                dispatch(addLikeToSong(songID))
                                            }
                                        />
                                    </div>
                                    <label htmlFor="author" className="">
                                        Author
                                    </label>
                                    <Input
                                        type="text"
                                        name="author"
                                        id="author"
                                        value={author}
                                        spellCheck="false"
                                        onChange={e =>
                                            setAuthor(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="genre">Genre</label>
                                    <Input
                                        type="text"
                                        name="genre"
                                        id="genre"
                                        value={genre}
                                        spellCheck="false"
                                        onChange={e => setGenre(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="uploader">Upload by</label>
                                    <Input
                                        type="text"
                                        name="uploader"
                                        id="uploader"
                                        value={uploader}
                                        spellCheck="false"
                                        onChange={e =>
                                            setUploader(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="song-modal__buttons">
                        <Button
                            type="button"
                            onClick={() =>
                                dispatch(
                                    editSongByID(songID, {
                                        name,
                                        uploader,
                                        author,
                                        genre,
                                    }),
                                )
                            }
                        >
                            Save changes
                        </Button>
                        <Button
                            type="button"
                            width="100px"
                            onClick={() => dispatch(deleteSongByID(songID))}
                        >
                            Delete
                        </Button> */
