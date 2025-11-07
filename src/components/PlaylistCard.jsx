import React from 'react';
import { Play } from 'lucide-react';

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="playlist-card">
      <div className="playlist-image">
        <img src={playlist.image} alt={playlist.title} />
        <div className="play-overlay">
          <Play size={32} fill="white" />
        </div>
      </div>
      <h3>{playlist.title}</h3>
      <p>{playlist.songsCount}</p>
    </div>
  );
};

export default PlaylistCard;