import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2 } from 'lucide-react';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);

  return (
    <div className="player">
      <div className="player-controls">
        <div className="player-tabs">
          <button className="tab-btn active">Audio</button>
          <button className="tab-btn">Video</button>
          <button className="tab-btn">Letras</button>
        </div>

        <div className="album-art-container">
          <div className="album-art">
            <img src={currentSong.image} alt={currentSong.title} />
          </div>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            <div className="progress-thumb" style={{ left: `${progress}%` }}></div>
          </div>
        </div>

        <div className="song-info">
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>

        <div className="time-display">
          <span>1:25</span>
          <span>3:42</span>
        </div>

        <div className="controls-buttons">
          <button className="control-btn"><Shuffle size={20} /></button>
          <button className="control-btn"><SkipBack size={24} /></button>
          <button className="control-btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button className="control-btn"><SkipForward size={24} /></button>
          <button className="control-btn"><Repeat size={20} /></button>
        </div>

        <div className="volume-control">
          <Volume2 size={20} />
          <div className="volume-slider">
            <div className="volume-fill" style={{ width: `${volume}%` }}></div>
            <div className="volume-thumb" style={{ left: `${volume}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;