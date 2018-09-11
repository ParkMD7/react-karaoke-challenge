import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.songData.title}</td>
      <td>{props.songData.singer}</td>
      <td><button onClick={()=>props.handlePlaySong(props.songData.id)}>Play</button></td>
    </tr>
  )
}

export default Song;
