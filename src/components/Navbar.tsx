import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import '../styles/Navbar.css';
import FavoritesModal from './FavoritesModal';
import { useFavorites } from '../context/FavoritesContext';

const Navbar = () => {
  const { favoritesCount } = useFavorites();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo512.png" alt="Zytho" className="logo-img" />
          </Link>
        </div>

        <div className="navbar-center">
          <div className="nav-links primary">
            <Link to="/beers">Bières</Link>
            <Link to="/breweries">Brasseries</Link>
            <Link to="/infos">Infos</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Rechercher..." />
            <button type="button" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          
          <button 
            className="favorites-button"
            onClick={() => setIsModalOpen(true)}
          >
            <FaHeart className="heart-icon" />
            {favoritesCount > 0 && (
              <span className="favorites-count">{favoritesCount}</span>
            )}
          </button>
          
          <div className="auth-buttons">
            <Link to="/register" className="btn btn-register">Inscription</Link>
            <Link to="/login" className="btn btn-login">Connexion</Link>
          </div>
        </div>
      </div>

      <FavoritesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
