import mongoose from 'mongoose';

const SongSchema = mongoose.Schema({
    // _id: String,
    name: {
        type: String,
        required: true,
        unique: true,
    },
    artist: {
        type: String,
        required: true,
        // (?) ref album artist/username
    },
    genre: {
        type: String,
        required: true,
    },
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
    // video: { (?)
    //     type: String,
    // }
});

const Song = mongoose.model('song', SongSchema);

export default Song;
