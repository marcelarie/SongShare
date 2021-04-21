import moongoose from 'mongoose';

const PlaylistSchema = moongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    songs: [
        {
            type: moongoose.Schema.Types.ObjectId,
            ref: 'song', // (?) Song
        },
    ],
});

const Playlist = moongoose.model('Playlist', PlaylistSchema);

export default Playlist;
