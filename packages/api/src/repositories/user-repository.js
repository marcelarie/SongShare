const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class UserRepository {
    create(options) {
        return normalizeDBQuery(db.User.create(options));
    }

    findOne(query) {
        return normalizeDBQuery(db.User.findOne(query, "-__v"));
    }

    findById(query) {
        return normalizeDBQuery(db.User.findById(query))
    }
}

module.exports = new UserRepository();
