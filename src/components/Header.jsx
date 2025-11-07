import React from 'react';
import { Search, Cast, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Buscar canciones, álbumes, artistas, playlists" />
      </div>
      <div className="header-actions">
        <button className="icon-btn"><Cast size={22} /></button>
        <button className="icon-btn"><Settings size={22} /></button>
        <button className="icon-btn"><User size={22} /></button>
      </div>
    </header>
  );
};

export default Header;