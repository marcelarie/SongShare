import { User } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const UserRepository = {
    create: options => {
        return normalizeDBQuery(User.create(options));
    },

    findOne: filter => {
        return normalizeDBQuery(User.findOne(filter, '-__v'));
    },

    //                      return the updated document ↴
    findByIdAndUpdate: (filter, body, option = { new: true }) => {
        return normalizeDBQuery(User.findByIdAndUpdate(filter, body, option));
    },

    findByIdAndDelete: filter => {
        return normalizeDBQuery(User.findByIdAndDelete(filter));
    },
};

export default UserRepository;
