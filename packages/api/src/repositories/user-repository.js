const db = require("../models")
const normalizeDBQuery = require("../utils/normalizeDBQuery")

class UserRepository {
    create(options) {
        return normalizeDBQuery(db.User.create(options))
    }

    findOne(filter) {
        return normalizeDBQuery(db.User.findOne(filter, "-__v"))
    }

    findByUsernameAndUpdate(filter, body) {
        return normalizeDBQuery(db.User.findOneAndUpdate(filter, body))
    }
}

module.exports = new UserRepository()
