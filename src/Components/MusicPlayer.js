import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPlayer.css';
import baarishein from '../Components/songs/baarishein.mp3';
import gunday from '../Components/songs/gunday.mp3';
import imagination from '../Components/songs/imagination.mp3';
import GangstasParadise from '../Components/songs/GangstasParadise.mp3';
import SachKehRahaHai from '../Components/songs/SachKehRahaHai.mp3';

function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    {
      url: require('../Components/songs/baarishein.mp3'),
      artist: 'Ruks',
      title: 'Baarishein'
    },
    {
      url: require('../Components/songs/gunday.mp3'),
      artist: 'Jassu',
      title: 'Gunday'
    },
    {
      url: require('../Components/songs/imagination.mp3'),
      artist: 'Tushar',
      title: 'Imagination'
    },
    {
      url: require('../Components/songs/GangstasParadise.mp3'),
      artist: 'Vinayak',
      title: "Gangsta's Paradise"
    },
    {
      url: require('../Components/songs/SachKehRahaHai.mp3'),
      artist: 'BrokenOne',
      title: 'Sach Keh Raha Hai'
    },
  ];  

  const playNextTrack = () => {
    setCurrentTrack(currentTrack === tracks.length - 1 ? 0 : currentTrack + 1);
    setIsPlaying(true);
  };

  const playPrevTrack = () => {
    setCurrentTrack(currentTrack === 0 ? tracks.length - 1 : currentTrack - 1);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <ReactAudioPlayer
        src={tracks[currentTrack].url}
        autoPlay={isPlaying}
        controls
        onEnded={playNextTrack}
      />
      <div>
        <h2>{tracks[currentTrack].title}</h2>
        <h3> Artist: {tracks[currentTrack].artist}</h3>
      </div>
      <div>
        <button onClick={playPrevTrack}>Prev</button>
        {/* <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button> */}
        &nbsp;&nbsp;&nbsp;<button onClick={playNextTrack}>Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
