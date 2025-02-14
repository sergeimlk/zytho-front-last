import React, { useEffect } from 'react';
import '../styles/FavoritesModal.css';
import { useFavorites } from '../context/FavoritesContext';
import { FaTimes, FaTrash } from 'react-icons/fa';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  const { favorites, removeFavorite } = useFavorites();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="favorites-modal-overlay" onClick={onClose}>
      <div className="favorites-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2>Mes Bières Favorites</h2>
        
        {favorites.length === 0 ? (
          <p className="no-favorites">Aucune bière favorite pour le moment</p>
        ) : (
          <div className="favorites-list">
            {favorites.map(beer => (
              <div key={beer.id_beer} className="favorite-item">
                <div className="favorite-info">
                  <h3>{beer.name}</h3>
                  <p>{beer.description}</p>
                  <p className="beer-details">
                    <span>ABV: {beer.abv}%</span>
                    <span>IBU: {beer.ibu}</span>
                  </p>
                </div>
                <button 
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(beer.id_beer)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;
