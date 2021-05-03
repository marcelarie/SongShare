import { normalize, schema } from 'normalizr';

export const song = new schema.Entity(
    'songs',
    {},
    {
        idAttribute: '_id',
    },
);

export function normalizeSongs(songs) {
    return normalize(songs, [song]);
}
