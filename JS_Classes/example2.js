
class Music {
   constructor(song, artist, year) {
        this.song = song;
        this.artist = artist;
        this.year = year;
   }
    
   showDetails() {
        console.log(this.song + " " + this.artist + " " + this.year);
   }
   showArtist() {
        console.log(this.artist);
   }
}

let songs = [];

let song1 = new Music("Purple Rain", "Prince", 1985);
let song2 = new Music("Happy Birthday", "Warner Bros", 1930);
let song3 = new Music("Maneater", "Darryl Hall + John Oates", 1986);

songs.push(song1);
songs.push(song2);
songs.push(song3);

console.log("songs", songs);

for (let i = 0; i < songs.length; i++) {
    songs[i].showDetails();
}

songs.forEach(song => {
    song.showArtist();
})

