const songs = [
  { title: "Song A", artist: "Artist 1", duration: 210, genre: "Pop" },
  { title: "Song B", artist: "Artist 2", duration: 180, genre: "Rock" },
  { title: "Song C", artist: "Artist 1", duration: 240, genre: "Pop" },
];

// Main difference between filter and find:
// filter returns an array of all matching elements
// find returns the first matching element

// Using filter to find songs by duration greater than 200 seconds
const longSongs = songs.filter((song) => song.duration > 200);
console.log(longSongs);
// Output: [ { title: 'Song A', artist: 'Artist 1', duration: 210, genre: 'Pop' },
//           { title: 'Song C', artist: 'Artist 1', duration: 240, genre: 'Pop' } ]

// Using find to locate the first song by "Artist 2"
const artist2Song = songs.find((song) => song.artist === "Artist 2");
console.log(artist2Song);
// Output: { title: 'Song B', artist: 'Artist 2', duration: 180, genre: 'Rock' }
