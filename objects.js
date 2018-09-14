var playlist = {rihanna: "diamonds", My Bloody Valentine: "song", Phil Ochs: "song", Slowdive: "song"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
