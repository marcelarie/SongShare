import normalizeDBQuery from '../utils/normalizeDBQuery.js';
import * as Models from '../models/index.js';

class Repository {
    constructor(type) {
        this.type = type;
    }

    create = options => {
        return normalizeDBQuery(Models[this.type].create(options));
    };

    find = filter => {
        return normalizeDBQuery(Models[this.type].find(filter));
    };

    findAndPopulate = (filter, toPopulate, populateFilter = []) => {
        return normalizeDBQuery(
            Models[this.type].find(filter).populate(toPopulate, populateFilter),
        );
    };

    findOne = filter => {
        return normalizeDBQuery(Models[this.type].findOne(filter, '-__v'));
    };

    findOneAndPouplate = (filter, toPopulate, populateFilter = []) => {
        return normalizeDBQuery(
            Models[this.type]
                .findOne(filter, '-__v')
                .populate(toPopulate, populateFilter),
        );
    };

    findOneLean = filter => {
        return normalizeDBQuery(
            Models[this.type].findOne(filter, '-__v').lean(),
        );
    };

    findLean = filter => {
        return normalizeDBQuery(Models[this.type].find(filter).lean());
    };

    findAndCheckLikes = (uid, id) => {
        return normalizeDBQuery(
            Models[this.type].find({ _id: uid, likes: { $in: [id] } }),
        );
    };

    findOneAndPouplate = (filter, toPopulate) => {
        return normalizeDBQuery(
            Models[this.type]
                .findOne(filter, '-__v')
                .populate(toPopulate)
                .lean(),
        );
    };

    findOneAndUpdate = (filter, body, option = { new: true }) => {
        return normalizeDBQuery(
            Models[this.type].findOneAndUpdate(filter, body, option),
            /* .populate('likes') */
        );
    };

    findByIdAndUpdate = (filter, body, option = { new: true }) => {
        return normalizeDBQuery(
            Models[this.type].findByIdAndUpdate(filter, body, option),
            /* .populate('likes') */
        );
    };

    findOneAndDelete = filter => {
        return normalizeDBQuery(Models[this.type].findOneAndDelete(filter));
    };

    findByIdAndDelete = filter => {
        return normalizeDBQuery(Models[this.type].findByIdAndDelete(filter));
    };
}

export default Repository;
