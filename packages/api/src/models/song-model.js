import mongoose from 'mongoose';

const SongSchema = mongoose.Schema({
    _id: String,
    username: {
        type: String,
        ref: 'user',
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    artist: {
        type: String,
        // required: true,
        // (?) ref album artist/username
    },
    genre: [
        {
            type: String,
            // required: true,
        },
    ],
    album: {
        type: String,
        // (?) ref album
    },
    year: {
        type: String,
    },
    lyrics: {
        type: String,
    },
    url: {
        type: String,
        require: true,
    },
    songPicUrl: {
        type: String,
    },
    bytes: {
        type: String,
        require: true,
    },
    format: {
        type: String,
        require: true,
    },
    likes: [
        {
            type: String,
            ref: 'user',
        },
        {
            timestamps: true,
        },
    ],

    // video: { (?)
    //     type: String,
    // }
});

const Song = mongoose.model('song', SongSchema);

export default Song;
