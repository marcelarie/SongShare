import { Song } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const SongRepository = {
    create: options => {
        return normalizeDBQuery(Song.create(options));
    },

    find: filter => {
        return normalizeDBQuery(Song.find(filter));
    },

    findOne: filter => {
        return normalizeDBQuery(Song.findOne(filter, '-__v'));
    },

    findOneAndPouplate: (filter, toPopulate) => {
        return normalizeDBQuery(
            Song.findOne(filter, '-__v').populate(toPopulate),
        );
    },

    //                     return the updated document ↴
    findOneAndUpdate: (filter, body, option = { new: true }) => {
        return normalizeDBQuery(Song.findOneAndUpdate(filter, body, option));
    },

    //                      return the updated document ↴
    findByIdAndUpdate: (filter, body, option = { new: true }) => {
        return normalizeDBQuery(Song.findByIdAndUpdate(filter, body, option));
    },

    findOneAndDelete: filter => {
        return normalizeDBQuery(Song.findOneAndDelete(filter));
    },

    findByIdAndDelete: filter => {
        return normalizeDBQuery(Song.findByIdAndDelete(filter));
    },
};

export default SongRepository;
