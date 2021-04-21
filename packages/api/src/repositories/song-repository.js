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

    //                      return the updated document ↴
    findOneAndUpdate: (filter, body, option = { new: true }) => {
        return normalizeDBQuery(Song.findOneAndUpdate(filter, body, option));
    },
};

export default SongRepository;
