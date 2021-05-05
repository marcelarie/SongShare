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
            ref: 'song', // (?) Song
        },
    ],
    default: [],
    likedBy: {
        type: [
            {
                type: String,
                ref: 'user',
            },
        ],
        default: [],
    },
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

export default Playlist;
