import { Song } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const SongRepository = {
    create: options => {
        return normalizeDBQuery(Song.create(options));
    },

    find: body => {
        return normalizeDBQuery(Song.find(body));
    },

    findOne: filter => {
        return normalizeDBQuery(Song.findOne(filter, '-__v'));
    },

    findOneAndUpdate: (filter, body) => {
        return normalizeDBQuery(Song.findOneAndUpdate(filter, body));
    },
};

export default SongRepository;
