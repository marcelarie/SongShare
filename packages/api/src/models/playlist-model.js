import mongoose from 'mongoose';

const PlaylistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        ref: 'user',
    },
    publicAccess: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        enum: ['Playlist', 'Album'],
        default: 'Playlist',
    },
    img: {
        type: String,
        default: 'https://picsum.photos/100',
    },
    songs: [
        {
            type: String,
            ref: 'song',
        },
    ],
    likedBy: [
        {
            type: String,
            ref: 'user',
        },
    ],
    followedBy: [
        {
            type: String,
            ref: 'user',
        },
    ],
});

const Playlist = mongoose.model('playlist', PlaylistSchema);

export default Playlist;
