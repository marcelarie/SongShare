import { normalize, schema } from 'normalizr';

export const user = new schema.Entity(
    'users',
    {},
    {
        idAttribute: '_id',
    },
);

export function normalizeSongs(users) {
    return normalize(users, [user]);
}
