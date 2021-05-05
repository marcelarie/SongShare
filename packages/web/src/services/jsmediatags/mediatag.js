import jsmediatags from 'jsmediatags';

new jsmediatags.Reader(
    'https://res.cloudinary.com/apollofymusicproject/video/upload/v1619709455/uploadedSongs/Ayax%20-%20Volando%20sobre%20el%20cuco.mp3.mp3',
)
    .setTagsToRead(['title', 'artist'])
    .read({
        onSuccess: function (tag) {
            console.log(tag);
        },
        onError: function (error) {
            console.log(':(', error.type, error.info);
        },
    });
