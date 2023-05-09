import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPlayer.css';

function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Jassu',
      title: 'Song 1'
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      artist: 'Tushar',
      title: 'Song 2'
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      artist: 'Ruks',
      title: 'Song 3'
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
