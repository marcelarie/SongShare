import mongoose from 'mongoose';

const PlaylistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'song', // (?) Song
        },
    ],
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

export default Playlist;
