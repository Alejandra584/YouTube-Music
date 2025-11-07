import React from 'react';
import { Play } from 'lucide-react';

const SongCard = ({ song, onPlay, layout = "grid" }) => {
  if (layout === "horizontal") {
    return (
      <div className="song-card-horizontal" onClick={() => onPlay(song)}>
        <div className="song-horizontal-image">
          <img src={song.image} alt={song.title} />
          <div className="play-overlay">
            <Play size={20} fill="white" />
          </div>
        </div>
        <div className="song-horizontal-details">
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
        <span className="song-horizontal-duration">{song.duration}</span>
      </div>
    );
  }

  return (
    <div className="song-card" onClick={() => onPlay(song)}>
      <div className="song-image">
        <img src={song.image} alt={song.title} />
        <div className="play-overlay">
          <Play size={24} fill="white" />
        </div>
      </div>
      <div className="song-details">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <span className="song-duration">{song.duration}</span>
    </div>
  );
};

export default SongCard;