import React, { useEffect, useState } from 'react';
import api from '../../api';
import * as auth from '../../services/auth';
import SongsCard from '../../components/SongsCard/SongsCard';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

import './styles.scss';
// import SongCard from '../../components/SongsCard/styles';
import UserCard from '../../components/UserCard/UserCard';

const Search = () => {
    const [query, setQuery] = useState('');
    const [musicView, setMusicView] = useState(true);
    const [playlistView, setPlaylistView] = useState(true);
    const [usersView, setUsersView] = useState(true);
    const [music, setmusic] = useState(null);
    const [playlists, setplaylists] = useState(null);
    const [users, setusers] = useState(null);

    useEffect(() => {}, [musicView]);

    const search = async () => {
        const token = await auth.getCurrentUserToken();

        try {
            const response = await api.getSongByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );
            if (response.data.data.length > 0) {
                setMusicView(true);
            }

            setmusic(response.data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }

        try {
            const response = await api.getPlayListByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );
            if (response.data.data.length > 0) {
                setPlaylistView(true);
            }
            setplaylists(response.data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }

        try {
            const response = await api.getUserByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );
            if (response.data.data.length > 0) {
                setUsersView(true);
            }
            setusers(response.data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    function hideMusic() {
        setMusicView(false);
    }
    function showMusic() {
        setMusicView(true);
    }
    function hidePlaylists() {
        setPlaylistView(false);
    }
    function showPlaylists() {
        setPlaylistView(true);
    }
    function hideUsers() {
        setUsersView(false);
    }
    function showUsers() {
        setUsersView(true);
    }

    return (
        <div className="search">
            <div className="search__header">
                <h3>Search</h3>
                <div className="search__header__input">
                    <input
                        onChange={e => setQuery(e.target.value)}
                        type="text"
                        placeholder="Search songs, playlists y users"
                    />
                    <button type="button" onClick={search}>
                        search
                    </button>
                </div>
            </div>
            {music || playlists || users ? (
                <div className="search__content">
                    <div className="search__content__music">
                        <button
                            type="button"
                            className="search__content__music__header"
                            onClick={musicView ? hideMusic : showMusic}
                        >
                            <h4>music</h4>
                            {musicView ? (
                                <div className="search__content__music__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.54182 0.541503L15.0002 17.729L26.4585 0.541504L29.5835 2.62484L15.0002 24.4998L0.416824 2.62484L3.54182 0.541503Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <div className="search__content__music__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.4582 24.4585L14.9998 7.271L3.5415 24.4585L0.416504 22.3752L14.9998 0.500166L29.5832 22.3752L26.4582 24.4585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                        {musicView ? (
                            <div className="search__content__music__content">
                                {music && music.length ? (
                                    music.map(song => {
                                        return (
                                            <SongsCard
                                                song={song}
                                                key={song.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        ) : (
                            <div className="search__content__music__content hidden">
                                {music && music.length ? (
                                    music.map(song => {
                                        return (
                                            <SongsCard
                                                song={song}
                                                key={song.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="search__content__playlists">
                        <button
                            type="button"
                            className="search__content__playlists__header"
                            onClick={
                                playlistView ? hidePlaylists : showPlaylists
                            }
                        >
                            <h4>playlists</h4>
                            {playlistView ? (
                                <div className="search__content__playlists__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.54182 0.541503L15.0002 17.729L26.4585 0.541504L29.5835 2.62484L15.0002 24.4998L0.416824 2.62484L3.54182 0.541503Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <div className="search__content__playlists__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.4582 24.4585L14.9998 7.271L3.5415 24.4585L0.416504 22.3752L14.9998 0.500166L29.5832 22.3752L26.4582 24.4585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                        {playlistView ? (
                            <div className="search__content__playlists__content ">
                                {playlists && playlists.length ? (
                                    playlists.map(playlist => {
                                        return (
                                            <PlaylistCard
                                                song={playlist}
                                                key={playlist.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        ) : (
                            <div className="search__content__playlists__content hidden">
                                {playlists && playlists.length ? (
                                    playlists.map(playlist => {
                                        return (
                                            <PlaylistCard
                                                song={playlist}
                                                key={playlist.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="search__content__users">
                        <button
                            type="button"
                            className="search__content__users__header"
                            onClick={usersView ? hideUsers : showUsers}
                        >
                            <h4>users</h4>
                            {usersView ? (
                                <div className="search__content__users__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.54182 0.541503L15.0002 17.729L26.4585 0.541504L29.5835 2.62484L15.0002 24.4998L0.416824 2.62484L3.54182 0.541503Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <div className="search__content__users__header__icon">
                                    <svg
                                        width="30"
                                        height="25"
                                        viewBox="0 0 30 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.4582 24.4585L14.9998 7.271L3.5415 24.4585L0.416504 22.3752L14.9998 0.500166L29.5832 22.3752L26.4582 24.4585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                        {usersView ? (
                            <div className="search__content__users__content ">
                                {users && users.length ? (
                                    users.map(user => {
                                        return (
                                            <UserCard
                                                user={user}
                                                key={user.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        ) : (
                            <div className="search__content__users__content hidden">
                                {users && users.length ? (
                                    users.map(user => {
                                        return (
                                            <UserCard
                                                user={user}
                                                key={user.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <p className="nomatch">no match</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="search__preview">search preview</div>
            )}
        </div>
    );
};

export default Search;
