function UseSortSongs(songs) {
    const songsOrder = [];
    for (const [index, value] of songs.entries()) {
        songsOrder.push({ id: index + 1, _id: value });
    }
    return songsOrder;
}

export default UseSortSongs;
