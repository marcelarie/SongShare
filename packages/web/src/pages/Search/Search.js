import React, { useEffect, useState } from 'react';
import api from '../../api';
import * as auth from '../../services/auth';
// import SongsCard from '../../components/SongsCard/SongsCard';
// import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

import './styles.scss';
import SongCard from '../../components/SongsCard/styles';
import UserCard from '../../components/UserCard/UserCard';

const Search = () => {
    const [query, setQuery] = useState('');
    // const [musicView, setMusicView] = useState(true);
    // const [playlistView, setPlaylistView] = useState(true);
    // const [usersView, setUsersView] = useState(true);
    const [music, setmusic] = useState(null);
    const [playlists, setplaylists] = useState(null);
    const [users, setusers] = useState(null);

    useEffect(() => {}, []);

    const search = async () => {
        const token = await auth.getCurrentUserToken();

        try {
            const response = await api.getSongByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );

            setmusic(response.data.data);
        } catch (error) {
            console.log(error);
        }

        try {
            const response = await api.getUserByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );

            setplaylists(response.data.data);
        } catch (error) {
            console.log(error);
        }

        try {
            const response = await api.getPlayListByParams(
                {
                    Authorization: `Bearer ${token}`,
                },
                query,
            );

            setusers(response.data.data);
        } catch (error) {
            console.log(error)
        }
    };

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
                        <h4>music</h4>
                        <div className="search__content__music__content">
                            {music && music.length ? (
                                music.map(song => {
                                    return (
                                        <SongCard song={song} key={song.id} />
                                    );
                                })
                            ) : (
                                <p>no match</p>
                            )}
                        </div>
                    </div>
                    <div className="search__content__playlists">
                        <h4>playlists</h4>
                        {/* <div className="search__content__playlists__content">
                            {
                                playlists&&
                                playlists.length?
                                playlists.map(playlist=>{
                                    return <PlaylistCard song={playlist} key={playlist.id}/>
                                })
                                :<p>no match</p>
                            }
                        </div> */}
                    </div>
                    <div className="search__content__users">
                        <h4>users</h4>
                        <div className="search__content__users__content">
                            {users && users.length ? (
                                users.map(user => {
                                    return (
                                        <UserCard user={user} key={user.id} />
                                    );
                                })
                            ) : (
                                <p>no match</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="search__preview">search preview</div>
            )}
        </div>
    );
};

export default Search;
