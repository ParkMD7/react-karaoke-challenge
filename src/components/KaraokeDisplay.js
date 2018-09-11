import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = props => {
  console.log(props)

  return (
    <div className="karaoke-display">
      <h2>{ props.playingSongLyrics ? props.playingSongLyrics.title : ""}</h2>
      <Lyrics lyrics={props.playingSongLyrics ? props.playingSongLyrics.lyrics : ""} />
    </div>
  )
}

export default KaraokeDisplay;
