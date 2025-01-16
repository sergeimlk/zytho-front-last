import React, { useState, useEffect } from 'react';
import '../styles/BeerList.css';
import { Beer as ApiBeer } from '../types/api.types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { api } from '../services/api';

interface BeerListProps {
  beers: ApiBeer[];
  loading?: boolean;
  error?: string | null;
  onBeerClick?: (beer: ApiBeer) => void;
  onFavoriteClick?: (beer: ApiBeer, event: React.MouseEvent) => void;
  isFavorite?: (beerId: number) => boolean;
}

interface Beer {
  id: string;
  name: string;
  description?: string;
  // Ajoutez d'autres propriétés selon votre modèle de données
}

export const BeerList: React.FC<BeerListProps> = ({ 
  beers = [],
  loading = false,
  error = null,
  onBeerClick,
  onFavoriteClick,
  isFavorite
}) => {
  const [selectedBeer, setSelectedBeer] = useState<number | null>(null);
  const [apiBeers, setApiBeers] = useState<ApiBeer[]>([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const data = await api.getAllBeers();
        setApiBeers(data);
        setApiLoading(false);
      } catch (err) {
        setApiError('Erreur lors du chargement des bières');
        setApiLoading(false);
      }
    };

    fetchBeers();
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent, beer: ApiBeer) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onBeerClick) {
        onBeerClick(beer);
      }
      setSelectedBeer(selectedBeer === beer.id_beer ? null : beer.id_beer);
    }
  };

  if (apiLoading) return (
    <div 
      role="status" 
      aria-live="polite"
      aria-busy="true"
      className="loading-container"
    >
      <span className="visually-hidden">Chargement des bières en cours</span>
      <div className="loading-spinner" aria-hidden="true">
        <div className="spinner"></div>
        Chargement...
      </div>
    </div>
  );

  if (apiError) return (
    <div 
      role="alert" 
      className="error-message"
      aria-live="assertive"
    >
      <span className="error-icon" aria-hidden="true">⚠️</span>
      {apiError}
    </div>
  );

  return (
    <section 
      aria-label="Liste des bières"
      className="beers-section"
    >
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        role="list"
      >
        {apiBeers.map((beer) => (
          <article 
            key={beer.id_beer} 
            className={`beer-card ${selectedBeer === beer.id_beer ? 'selected' : ''}`}
            role="listitem"
            tabIndex={0}
            onClick={() => {
              if (onBeerClick) onBeerClick(beer);
              setSelectedBeer(selectedBeer === beer.id_beer ? null : beer.id_beer);
            }}
            onKeyDown={(e) => handleKeyPress(e, beer)}
            aria-expanded={selectedBeer === beer.id_beer}
            aria-labelledby={`beer-name-${beer.id_beer}`}
          >
            <div className="beer-header">
              <h2 
                id={`beer-name-${beer.id_beer}`}
                className="beer-title"
              >
                {beer.name}
                {beer.abv && (
                  <span 
                    className="beer-abv" 
                    aria-label={`${beer.abv}% d'alcool`}
                  >
                    ({beer.abv}%)
                  </span>
                )}
              </h2>
              {beer.image && (
                <img 
                  src={beer.image}
                  alt={`Bouteille de ${beer.name}`}
                  className="beer-image"
                  loading="lazy"
                />
              )}
            </div>
            
            <div 
              className={`beer-description ${selectedBeer === beer.id_beer ? 'expanded' : ''}`}
              aria-labelledby={`beer-name-${beer.id_beer}`}
            >
              {beer.description && <p>{beer.description}</p>}
              {beer.ibu && (
                <p className="beer-ibu" aria-label={`Indice d'amertume: ${beer.ibu} IBU`}>
                  IBU: {beer.ibu}
                </p>
              )}
              {onFavoriteClick && isFavorite && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavoriteClick(beer, e);
                  }}
                  className="favorite-button"
                  aria-label={`${isFavorite(beer.id_beer) ? 'Retirer des favoris' : 'Ajouter aux favoris'} ${beer.name}`}
                  aria-pressed={isFavorite(beer.id_beer)}
                >
                  {isFavorite(beer.id_beer) ? (
                    <FaHeart className="text-red-500" aria-hidden="true" />
                  ) : (
                    <FaRegHeart aria-hidden="true" />
                  )}
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BeerList;
