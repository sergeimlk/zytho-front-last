import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import '../styles/Navbar.css';
import FavoritesModal from './FavoritesModal';
import { tempFavorites } from '../pages/Favorites';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState(tempFavorites);

  const handleRemoveFavorite = (id: number) => {
    setFavorites(favorites.filter(beer => beer.id !== id));
  };

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
            <span className="favorites-count">{favorites.length}</span>
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
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </nav>
  );
};

export default Navbar;
