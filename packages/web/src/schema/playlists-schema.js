import { normalize, schema } from 'normalizr';
import { song } from './songs-schema'

const playlist = new schema.Entity(
    'playlists',
    {},
    {
        idAttribute: '_id',
    },
);
const fullPlaylist = new schema.Entity(
    'playlists',
    {
        songs: [song],
    },
    {
        idAttribute: '_id',
    },
);

export function normalizePlaylist(playlists) {
    return normalize(playlists, [playlist]);
}

export function normalizeFullPlaylists(playlists) {
    return normalize(playlists, [fullPlaylist]);
}
