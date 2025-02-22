// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  printPlaylists: function () {
    for (const key in this.playlists) {
      console.log(
        `${key}: ${this.playlists[key]["name"]} - ${this.playlists[key]["tracks"].length} tracks`
      );
    }
  },
  printTracks: function () {
    for (const key in this.tracks) {
      console.log(
        `${key}: ${this.tracks[key]["name"]} by ${this.tracks[key]["artist"]} (${this.tracks[key]["album"]})`
      );
    }
  },
  printPlaylist: function (playlistId) {
    for (const key in this.playlists) {
      if (key === playlistId) {
        console.log(
          `${key}: ${this.playlists[key]["name"]} - ${this.playlists[key]["tracks"].length} tracks`
        );
        for (const tracksKey of this.playlists[key]["tracks"]) {
          for (const keyOfTracksOfLibrary of Object.keys(library["tracks"])) {
            if (tracksKey === keyOfTracksOfLibrary) {
              console.log(
                `${tracksKey}: ${library["tracks"][tracksKey]["name"]} by ${library["tracks"][tracksKey]["artist"]} (${library["tracks"][tracksKey]["album"]})`
              );
            }
          }
        }
      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    const arr = this["playlists"][playlistId]["tracks"];
    arr.push(trackId);
  },
  addTrack: function (name, artist, album) {
    const createdId = generateUid();
    this["tracks"][createdId] = {
      id: createdId,
      name: name,
      artist: artist,
      album: album,
    };
  },
  addPlaylist: function (name) {
    const createdId = generateUid();
    this.playlists[createdId] = {
      id: createdId,
      name: name,
      tracks: [createdId],
    };
  },
};

// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.printPlaylist("p02");
// library.addTrackToPlaylist("t01", "p01");
// library.addTrack("sdfasdfasdf", "safsdfasf", "fasdfsdf");
// console.log(library.tracks);
// library.addPlaylist("dafdsfas");
// console.log(library.playlists);

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function () {
//   for (const key in library.playlists) {
//     console.log(
//       `${key}: ${library.playlists[key]["name"]} - ${library.playlists[key]["tracks"].length} tracks`
//     );
//   }
// };
// printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function () {
//   for (const key in library.tracks) {
//     console.log(
//       `${key}: ${library.tracks[key]["name"]} by ${library.tracks[key]["artist"]} (${library.tracks[key]["album"]})`
//     );
//   }
// };
// printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function (playlistId) {
//   for (const key in library.playlists) {
//     if (key === playlistId) {
//       console.log(
//         `${key}: ${library.playlists[key]["name"]} - ${library.playlists[key]["tracks"].length} tracks`
//       );
//       for (const tracksKey of library.playlists[key]["tracks"]) {
//         for (const keyOfTracksOfLibrary of Object.keys(library["tracks"])) {
//           if (tracksKey === keyOfTracksOfLibrary) {
//             console.log(
//               `${tracksKey}: ${library["tracks"][tracksKey]["name"]} by ${library["tracks"][tracksKey]["artist"]} (${library["tracks"][tracksKey]["album"]})`
//             );
//           }
//         }
//       }
//     }
//   }
// };
// printPlaylist("p01");
// printPlaylist("p02");

// adds an existing track to an existing playlist
// const addTrackToPlaylist = function (trackId, playlistId) {
//   const arr = library["playlists"][playlistId]["tracks"];
//   arr.push(trackId);
// };
// addTrackToPlaylist("t01", "p01");

// adds a track to the library
// const addTrack = function (name, artist, album) {
//   const createdId = generateUid();
//   library["tracks"][createdId] = {
//     id: createdId,
//     name: name,
//     artist: artist,
//     album: album,
//   };
// };
// addTrack("sdfasdfasdf", "safsdfasf", "fasdfsdf");
// console.log(library.tracks);

// adds a playlist to the library
// const addPlaylist = function (name) {
//   const createdId = generateUid();
//   library.playlists[createdId] = {
//     id: createdId,
//     name: name,
//     tracks: [createdId],
//   };
// };
// addPlaylist("dafdsfas");
// console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
