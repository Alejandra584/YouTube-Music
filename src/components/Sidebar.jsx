import React from 'react';
import { Home, Compass, Library, Music, Album, Clock, ThumbsUp, TrendingUp } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon"></div>
        <span>YouTube Music</span>
      </div>
      
      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          <Home size={20} />
          <span>Inicio</span>
        </a>
        <a href="#" className="nav-item">
          <Compass size={20} />
          <span>Explorar</span>
        </a>
        <a href="#" className="nav-item">
          <Library size={20} />
          <span>Biblioteca</span>
        </a>
      </nav>

      <div className="nav-section">
        <div className="nav-section-title">TU BIBLIOTECA</div>
        <a href="#" className="nav-item">
          <Music size={20} />
          <span>Canciones</span>
        </a>
        <a href="#" className="nav-item">
          <Album size={20} />
          <span>Álbumes</span>
        </a>
        <a href="#" className="nav-item">
          <Clock size={20} />
          <span>Historial</span>
        </a>
        <a href="#" className="nav-item">
          <ThumbsUp size={20} />
          <span>Me gusta</span>
        </a>
        <a href="#" className="nav-item">
          <TrendingUp size={20} />
          <span>Tendencias</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;