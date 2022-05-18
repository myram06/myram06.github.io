class Playlist {
    #songs;
    #Pname;
    constructor(songs, Pname) {
        this.#songs = songs;
        this.#Pname = Pname;
    }

    getSongList() {
        return this.#songs;
    }

    getName() {
        return this.#Pname;
    }
}

class Song {
    #name;
    #length;
    constructor(name, length) {
        this.#length = length;
        this.#name = name;
    }

    getLength() {
        return this.#length;
    }

    getName() {
        return this.#name;
    }


}

class Listener {
    #name;
    #playLists;
    #selectedList;
    constructor(name, playLists, selectedList) {
        this.#name = name;
        this.#playLists = playLists;
        this.#selectedList = selectedList;
    }

    getName() {
        return this.#name;
    }


    showPlaylistOptions(){
        console.log(this.#playLists)
    }


    playPlayList() {
        let songList = this.#selectedList.getSongList();
        console.log(this.#selectedList.getName() + " has played.")
        for (let i = 0; i < songList.length; i++) {
            console.log(songList[i].getName());
        }
    }

    getSelectedList() {
        return this.#selectedList;
    }

}




let song1 = new Song("Song1", 3.15);
let song2 = new Song("Song2", 3.45);
let song3 = new Song("Song3", 4.47);
let song4 = new Song("Song4", 1.21);
let song5 = new Song("Song5", 2.19);
let song6 = new Song("Song6", 3.33);
let song7 = new Song("Song7", 5.17);
let song8 = new Song("Song8", 4.36);
let song9 = new Song("Song9", 3.22);


let RhythmnNBlues = new Playlist([song1, song2, song3], "R&B");
let Classical = new Playlist([song4, song5, song6], "Classical");
let HipHop = new Playlist([song7, song8, song9], "Hip Hop");

let Miriam = new Listener("Miriam", [Classical, RhythmnNBlues, HipHop], HipHop);

Miriam.playPlayList();
