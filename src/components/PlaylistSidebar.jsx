import React from 'react';

const PlaylistSidebar = ({ playlists }) => {
  return (
    <div className="playlist-sidebar">
      <h3 className="playlist-sidebar-title">Tus playlists</h3>
      <div className="playlist-sidebar-grid">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-sidebar-card">
            <img src={playlist.image} alt={playlist.title} />
            <div className="playlist-sidebar-info">
              <h4>{playlist.title}</h4>
              <p>{playlist.songsCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSidebar;