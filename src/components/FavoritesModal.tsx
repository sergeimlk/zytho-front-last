import React from 'react';
import '../styles/FavoritesModal.css';

interface Beer {
  id: number;
  name: string;
  brewery: string;
  image: string;
}

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Beer[];
  onRemoveFavorite: (id: number) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite
}) => {
  React.useEffect(() => {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Mes Bières Favorites</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="favorites-list">
          {favorites.length === 0 ? (
            <p className="empty-message">Aucune bière favorite pour le moment</p>
          ) : (
            favorites.map(beer => (
              <div key={beer.id} className="favorite-item">
                <img src={beer.image} alt={beer.name} className="beer-image" />
                <div className="beer-info">
                  <h3>{beer.name}</h3>
                  <p>{beer.brewery}</p>
                </div>
                <button 
                  className="remove-button"
                  onClick={() => onRemoveFavorite(beer.id)}
                >
                  <i className="fas fa-heart-broken"></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
