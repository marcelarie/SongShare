import { Song } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const SongRepository = {
    create: options => {
        return normalizeDBQuery(Song.create(options));
    },

    findOne: filter => {
        return normalizeDBQuery(Song.findOne(filter, '-__v'));
    },

    findByIdAndUpdate: (filter, body) => {
        return normalizeDBQuery(Song.findByIdAndUpdate(filter, body));
    },
};

export default SongRepository;
