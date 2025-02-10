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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4 mx-auto max-w-7xl"
        role="listbox"
      >
        {apiBeers.map((beer) => (
          <article 
            key={beer.id_beer} 
            role="option"
            aria-selected={selectedBeer === beer.id_beer}
            className={`beer-card flex flex-col p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow
              ${selectedBeer === beer.id_beer ? 'selected border-2 border-amber-500' : ''}`}
            tabIndex={0}
            onClick={() => {
              if (onBeerClick) {
                onBeerClick(beer);
              }
              setSelectedBeer(selectedBeer === beer.id_beer ? null : beer.id_beer);
            }}
            onKeyDown={(e) => handleKeyPress(e, beer)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-grow">
                {beer.name}
              </h3>
              {onFavoriteClick && isFavorite && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavoriteClick(beer, e);
                  }}
                  className="favorite-button ml-2 p-1 rounded-full hover:bg-gray-100"
                  aria-label={`${isFavorite(beer.id_beer) ? 'Retirer des favoris' : 'Ajouter aux favoris'}`}
                >
                  {isFavorite(beer.id_beer) ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-red-500 text-xl" />
                  )}
                </button>
              )}
            </div>
            
            <div className="beer-details space-y-2">
              <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                {beer.description}
              </p>
              <div className="beer-meta flex flex-wrap gap-2 text-sm text-gray-500">
                {beer.alcohol && (
                  <span className="bg-amber-100 px-2 py-1 rounded-full">
                    {beer.alcohol}% ABV
                  </span>
                )}
                {beer.type && (
                  <span className="bg-amber-100 px-2 py-1 rounded-full">
                    {beer.type}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BeerList;
