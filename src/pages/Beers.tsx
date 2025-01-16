import React, { useState, useEffect } from 'react';
import '../styles/Beers.css';
import SearchBar from '../components/SearchBar';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { apiService } from '../services/api.service';
import { Beer as ApiBeer, Brewery } from '../types/api.types';
import { useFavorites } from '../context/FavoritesContext';
import FavoriteToast from '../components/FavoriteToast';

interface BeerDisplay extends ApiBeer {
  id: number;
  image: string;
  price?: number;
}

const Beers = () => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBreweries, setSelectedBreweries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBeer, setSelectedBeer] = useState<BeerDisplay | null>(null);
  const [beers, setBeers] = useState<BeerDisplay[]>([]);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState({ visible: false, message: '', type: '' as 'success' | 'error' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [beersData, breweriesData] = await Promise.all([
          apiService.getAllBeers(),
          apiService.getAllBreweries()
        ]);

        const beersWithDisplay = beersData.map(beer => ({
          ...beer,
          id: beer.id_beer,
          image: "https://www.belharra.eus/files/BIERES/baleharra-33-blonde.png",
          price: beer.abv ? beer.abv * 0.8 : 5.0
        }));

        setBeers(beersWithDisplay);
        setBreweries(breweriesData);
        setLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement des données");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
  };

  const handleFavoriteClick = (beer: BeerDisplay, event: React.MouseEvent) => {
    event.stopPropagation();
    const isFav = isFavorite(beer.id_beer);
    
    try {
      if (isFav) {
        removeFavorite(beer.id_beer);
        setToast({ visible: true, message: 'Bière retirée des favoris', type: 'success' });
      } else {
        addFavorite(beer);
        setToast({ visible: true, message: 'Bière ajoutée aux favoris', type: 'success' });
      }
    } catch (error) {
      setToast({ visible: true, message: 'Erreur lors de la mise à jour des favoris', type: 'error' });
    }
  };

  const handleToastClose = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const openBeerDetails = (beer: BeerDisplay) => {
    setSelectedBeer(beer);
  };

  const types = [...new Set(beers
    .map(beer => beer.category_id)
    .filter((category): category is string => category !== undefined))];

  const breweryNames = [...new Set(breweries.map(brewery => brewery.name))];

  const filteredBeers = beers.filter(beer => {
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const beerName = beer.name.toLowerCase();
    const brewery = breweries.find(b => b.id_brewery === beer.brewery_id)?.name.toLowerCase() || '';
    const matchesSearch = searchTerms.every(term => 
      beerName.includes(term) || brewery.includes(term)
    );

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(beer.category_id || '');
    const matchesBrewery = selectedBreweries.length === 0 || 
      (breweries.find(b => b.id_brewery === beer.brewery_id)?.name &&
      selectedBreweries.includes(breweries.find(b => b.id_brewery === beer.brewery_id)!.name));
    const matchesPrice = beer.price! >= priceRange[0] && beer.price! <= priceRange[1];

    return matchesSearch && matchesType && matchesBrewery && matchesPrice;
  });

  if (loading) return (
    <div role="status" aria-live="polite" className="loading" aria-busy="true">
      <span className="visually-hidden">Chargement des bières en cours</span>
      Chargement...
    </div>
  );

  if (error) return (
    <div role="alert" className="error" aria-live="assertive">
      {error}
    </div>
  );

  return (
    <div className="beers-container">
      <h1 className="page-title" tabIndex={0}>Nos Bières Artisanales</h1>
      <div className="beers-content">
        <div className="beers-page">
          <aside className="filters-sidebar" aria-label="Filtres de recherche">
            <div className="filter-section">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Rechercher une bière..."
                className="beers-search"
                label="Rechercher une bière"
              />
            </div>

            <div className="filter-section">
              <h2 id="price-filter-label">Prix</h2>
              <div 
                className="price-range" 
                role="group" 
                aria-labelledby="price-filter-label"
              >
                <div className="range-inputs">
                  <label className="visually-hidden" htmlFor="min-price">Prix minimum</label>
                  <input 
                    id="min-price"
                    type="range" 
                    min={0} 
                    max={20} 
                    value={priceRange[0]} 
                    onChange={(e) => {
                      const min = parseInt(e.target.value);
                      setPriceRange([Math.min(min, priceRange[1]), priceRange[1]]);
                    }}
                    className="range-input min-range"
                    aria-valuemin={0}
                    aria-valuemax={20}
                    aria-valuenow={priceRange[0]}
                    aria-label="Prix minimum"
                  />
                  <label className="visually-hidden" htmlFor="max-price">Prix maximum</label>
                  <input 
                    id="max-price"
                    type="range" 
                    min={0} 
                    max={20} 
                    value={priceRange[1]} 
                    onChange={(e) => {
                      const max = parseInt(e.target.value);
                      setPriceRange([priceRange[0], Math.max(max, priceRange[0])]);
                    }}
                    className="range-input max-range"
                    aria-valuemin={0}
                    aria-valuemax={20}
                    aria-valuenow={priceRange[1]}
                    aria-label="Prix maximum"
                  />
                </div>
                <div className="price-display" aria-live="polite">
                  <span>Entre {priceRange[0]}€ et {priceRange[1]}€</span>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h2 id="type-filter-label">Type de bière</h2>
              <div 
                className="checkbox-group"
                role="group"
                aria-labelledby="type-filter-label"
              >
                {types.map(type => (
                  <label key={type} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => {
                        if (selectedTypes.includes(type)) {
                          setSelectedTypes(selectedTypes.filter(t => t !== type));
                        } else {
                          setSelectedTypes([...selectedTypes, type]);
                        }
                      }}
                      aria-label={`Filtrer par type: ${type}`}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h2 id="brewery-filter-label">Brasserie</h2>
              <div 
                className="checkbox-group"
                role="group"
                aria-labelledby="brewery-filter-label"
              >
                {breweryNames.map(brewery => (
                  <label key={brewery} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedBreweries.includes(brewery)}
                      onChange={() => {
                        if (selectedBreweries.includes(brewery)) {
                          setSelectedBreweries(selectedBreweries.filter(b => b !== brewery));
                        } else {
                          setSelectedBreweries([...selectedBreweries, brewery]);
                        }
                      }}
                      aria-label={`Filtrer par brasserie: ${brewery}`}
                    />
                    {brewery}
                  </label>
                ))}
              </div>
            </div>
          </aside>
          
          <main className="beers-main">
            <div 
              className="beers-grid" 
              role="list"
              aria-label="Liste des bières"
            >
              {filteredBeers.map((beer) => (
                <article 
                  key={beer.id} 
                  className="beer-card" 
                  role="listitem"
                  onClick={() => openBeerDetails(beer)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openBeerDetails(beer);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`${beer.name} par ${breweries.find(b => b.id_brewery === beer.brewery_id)?.name}`}
                >
                  <div className="beer-image">
                    <img src={beer.image} alt={`Bouteille de ${beer.name}`} />
                    <button
                      className={`favorite-button ${isFavorite(beer.id_beer) ? 'active' : ''}`}
                      onClick={(e) => handleFavoriteClick(beer, e)}
                      aria-label={isFavorite(beer.id_beer) ? `Retirer ${beer.name} des favoris` : `Ajouter ${beer.name} aux favoris`}
                      aria-pressed={isFavorite(beer.id_beer)}
                    >
                      {isFavorite(beer.id_beer) ? (
                        <FaHeart className="heart-icon" aria-hidden="true" />
                      ) : (
                        <FaRegHeart className="heart-icon" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  <div className="beer-info">
                    <h3>{beer.name}</h3>
                    <p className="brewery">{breweries.find(b => b.id_brewery === beer.brewery_id)?.name}</p>
                    <p className="type">{beer.category_id}</p>
                    <p className="price" aria-label={`Prix: ${beer.price!.toFixed(2)} euros`}>
                      {beer.price!.toFixed(2)} €
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      {selectedBeer && (
        <div 
          className="beer-modal-overlay" 
          onClick={() => setSelectedBeer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${selectedBeer.id}`}
        >
          <div 
            className="beer-modal-content" 
            onClick={e => e.stopPropagation()}
            role="document"
          >
            <button 
              className="close-modal" 
              onClick={() => setSelectedBeer(null)}
              aria-label="Fermer les détails de la bière"
            >
              &times;
            </button>
            <div className="beer-modal-header">
              <img 
                src={selectedBeer.image} 
                alt={`Bouteille de ${selectedBeer.name}`} 
                className="modal-beer-image" 
              />
              <div className="modal-beer-info">
                <h2 id={`modal-title-${selectedBeer.id}`}>{selectedBeer.name}</h2>
                <p className="modal-brewery">
                  {breweries.find(b => b.id_brewery === selectedBeer.brewery_id)?.name}
                </p>
                <p className="modal-type">{selectedBeer.category_id}</p>
                <p className="modal-price" aria-label={`Prix: ${selectedBeer.price!.toFixed(2)} euros`}>
                  {selectedBeer.price!.toFixed(2)} €
                </p>
                <button 
                  className={`modal-favorite-button ${isFavorite(selectedBeer.id_beer) ? 'active' : ''}`}
                  onClick={(e) => handleFavoriteClick(selectedBeer, e)}
                  aria-label={isFavorite(selectedBeer.id_beer) ? 
                    `Retirer ${selectedBeer.name} des favoris` : 
                    `Ajouter ${selectedBeer.name} aux favoris`}
                  aria-pressed={isFavorite(selectedBeer.id_beer)}
                >
                  {isFavorite(selectedBeer.id_beer) ? 
                    <FaHeart className="heart-icon filled" aria-hidden="true" /> : 
                    <FaRegHeart className="heart-icon" aria-hidden="true" />
                  }
                  {isFavorite(selectedBeer.id_beer) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast.visible && (
        <FavoriteToast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default Beers;
