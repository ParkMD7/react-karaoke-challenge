import React from 'react';
import Song from './Song'

const SongList = (props) => {
  //console.log('Songs are', props.songs)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songs.map(songObj=><Song key={songObj.id} songData={songObj} handlePlaySong={props.handlePlaySong} />)}
        
      </tbody>
    </table>
  )
}

export default SongList;
