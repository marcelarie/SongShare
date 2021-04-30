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
    songs: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'song', // (?) Song
            },
        ],
        default: [],
    },
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
