import { User } from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const UserRepository = {
    create: options => {
        return normalizeDBQuery(User.create(options));
    },

    findOne: filter => {
        return normalizeDBQuery(User.findOne(filter, '-__v'));
    },

    findByIdAndUpdate: (filter, body) => {
        return normalizeDBQuery(User.findByIdAndUpdate(filter, body));
    },
};

export default UserRepository;
