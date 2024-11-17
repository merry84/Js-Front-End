function songInfo(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const numberSongs = parseInt(input[0]);
    const songs = [];
    for (let index = 1; index <= numberSongs; index++) {
        const [typeList, name, time] = input[index].split('_');
        songs.push(new Song(typeList, name, time));

    }
    const filterType = input[numberSongs + 1];

    songs.forEach(song => {
        if (filterType === 'all' || song.typeList === filterType)
            console.log(song.name);

    })
}
songInfo([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    );