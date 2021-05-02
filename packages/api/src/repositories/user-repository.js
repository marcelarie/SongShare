import { User } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const UserRepository = {
    create: options => {
        return normalizeDBQuery(User.create(options));
    },

    find: filter => {
        return normalizeDBQuery(User.find(filter));
    },

    findLean: filter => {
        return normalizeDBQuery(User.find(filter).lean());
    },

    findAndCheckLikes: (uid, id) => {
        return normalizeDBQuery(User.find({ _id: uid, likes: { $in: [id] } }));
    },

    findOne: filter => {
        return normalizeDBQuery(User.findOne(filter, '-__v').populate('likes'));
    },

    findOneLean: filter => {
        return normalizeDBQuery(User.findOne(filter, '-__v').lean());
    },

    //                      return the updated document ↴
    findByIdAndUpdate: (filter, body, option = { new: true }) => {
        return normalizeDBQuery(
            User.findByIdAndUpdate(filter, body, option).populate('likes'),
        );
    },

    findByIdAndDelete: filter => {
        return normalizeDBQuery(User.findByIdAndDelete(filter));
    },
};

export default UserRepository;
