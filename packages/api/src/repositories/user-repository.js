import { User } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const UserRepository = {
    create: options => {
        return normalizeDBQuery(User.create(options));
    },

    find: filter => {
        return normalizeDBQuery(User.find(filter));
    },

    findAndCheckLikes: filter => {
        return normalizeDBQuery(
            User.find({ _id: filter }).where('likes').nin(['other']),
            // .elemMatch(
            //     'likes',
            //     { $eq: filter },
            //     function (err, results) {
            //         console.log(results);
            //         console.log(err);
            //     },
            // ),
        );
    },

    findOne: filter => {
        return normalizeDBQuery(User.findOne(filter, '-__v').populate('likes'));
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
