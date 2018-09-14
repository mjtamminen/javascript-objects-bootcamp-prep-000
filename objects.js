var playlist = {
  "My Bloody Valentine": "song1", 
  "Phil Ochs": "song2", 
  
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
