import { Playlist } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const PlaylistRepository = {
    create: options => {
        return normalizeDBQuery(Playlist.create(options));
    },

    find: filter => {
        return normalizeDBQuery(Playlist.find(filter));
    },

    findOne: filter => {
        return normalizeDBQuery(Playlist.findOne(filter, '-__v'));
    },

    findByIdAndUpdate:  (filter, body, option = { new: true }) => {
        return normalizeDBQuery(Playlist.findByIdAndUpdate(filter, body, option));
    },
};

export default PlaylistRepository;
