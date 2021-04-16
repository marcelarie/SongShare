// const db = require("../models")
// const normalizeDBQuery = require("../utils/normalizeDBQuery")
import db from '../models/index.js';
import normalizeDBQuery from '../utils/normalizeDBQuery.js';

const UserRepository = {
    create: options => {
        return normalizeDBQuery(db.User.create(options));
    },

    findOne: filter => {
        return normalizeDBQuery(db.User.findOne(filter, '-__v'));
    },

    findByUsernameAndUpdate: (filter, body) => {
        return normalizeDBQuery(db.User.findOneAndUpdate(filter, body));
    },
};

export default UserRepository;

// module.exports = new UserRepository()
