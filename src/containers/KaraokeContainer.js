import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      songs:[],
      currentlyPlayingSongId:null,
      searchTerm: ''
    }
  }

  playSong = (songId) => {
    this.setState({currentlyPlayingSongId:songId},()=>console.log(this.state))
  }

  handleSearchTerm = event => {
    this.setState({searchTerm: event.target.value})
  }

  songsToDisplay = () => {
    return this.state.songs.filter(songObj=>songObj.title.toLowerCase().includes(this.state.searchTerm))
  }

  currentlyPlayingSong = () => {
    return this.state.songs.find(songObj=>songObj.id === this.state.currentlyPlayingSongId)
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs').then(r=>r.json()).then(data=>{
      this.setState({songs:data})
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearchTermUpdates={this.handleSearchTerm} />
          <SongList songs={this.songsToDisplay()} handlePlaySong={this.playSong} />
        </div>
        <KaraokeDisplay  playingSongLyrics={this.currentlyPlayingSong()}/>
      </div>
    );
  }
}

export default KaraokeContainer;
