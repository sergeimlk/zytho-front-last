import React, { useState, useEffect } from 'react';
import '../styles/Beers.css';
import SearchBar from '../components/SearchBar';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { apiService } from '../services/api.service';
import { Beer as ApiBeer, Brewery } from '../types/api.types';

interface BeerDisplay extends ApiBeer {
  image: string;
  price?: number;
}

const Beers = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBreweries, setSelectedBreweries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBeer, setSelectedBeer] = useState<BeerDisplay | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [beers, setBeers] = useState<BeerDisplay[]>([]);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [beersData, breweriesData] = await Promise.all([
          apiService.getAllBeers(),
          apiService.getAllBreweries()
        ]);

        // Ajouter des images par défaut et un prix fictif pour les bières
        const beersWithDisplay = beersData.map(beer => ({
          ...beer,
          image: "https://www.belharra.eus/files/BIERES/baleharra-33-blonde.png",
          price: parseFloat(beer.abv) * 0.8 // Prix fictif basé sur le degré d'alcool
        }));

        setBeers(beersWithDisplay);
        setBreweries(breweriesData);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        setLoading(false);
        console.error('Erreur:', err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
  };

  const toggleFavorite = (e: React.MouseEvent, beerId: number) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(beerId) ? prev.filter(id => id !== beerId) : [...prev, beerId]
    );
  };

  const openBeerDetails = (beer: BeerDisplay) => {
    setSelectedBeer(beer);
  };

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  const types = [...new Set(beers.map(beer => beer.category_id.toString()))];
  const breweryNames = [...new Set(breweries.map(brewery => brewery.name))];

  const filteredBeers = beers.filter(beer => {
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const beerName = beer.name.toLowerCase();
    const brewery = breweries.find(b => b.id_brewery === beer.brewery_id)?.name.toLowerCase() || '';
    const matchesSearch = searchTerms.every(term => 
      beerName.includes(term) || brewery.includes(term)
    );

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(beer.category_id.toString());
    const matchesBrewery = selectedBreweries.length === 0 || 
      (breweries.find(b => b.id_brewery === beer.brewery_id)?.name &&
      selectedBreweries.includes(breweries.find(b => b.id_brewery === beer.brewery_id)!.name));
    const matchesPrice = beer.price! >= priceRange[0] && beer.price! <= priceRange[1];

    return matchesSearch && matchesType && matchesBrewery && matchesPrice;
  });

  return (
    <div className="beers-container">
      <h1 className="page-title">🍺 Nos Bières Artisanales</h1>
      <div className="beers-content">
        <div className="beers-page">
          <aside className="filters-sidebar">
            <div className="filter-section">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Rechercher une bière..."
                className="beers-search"
              />
            </div>
            <div className="filter-section">
              <h3>Prix</h3>
              <div className="price-range">
                <div className="range-inputs">
                  <input 
                    type="range" 
                    min={0} 
                    max={20} 
                    value={priceRange[0]} 
                    onChange={(e) => {
                      const min = parseInt(e.target.value);
                      setPriceRange([Math.min(min, priceRange[1]), priceRange[1]]);
                    }}
                    className="range-input min-range"
                  />
                  <input 
                    type="range" 
                    min={0} 
                    max={20} 
                    value={priceRange[1]} 
                    onChange={(e) => {
                      const max = parseInt(e.target.value);
                      setPriceRange([priceRange[0], Math.max(max, priceRange[0])]);
                    }}
                    className="range-input max-range"
                  />
                </div>
                <div className="price-display">
                  <span>{priceRange[0]}€ - {priceRange[1]}€</span>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3>Type de bière</h3>
              <div className="checkbox-group">
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
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Brasserie</h3>
              <div className="checkbox-group">
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
                    />
                    {brewery}
                  </label>
                ))}
              </div>
            </div>
          </aside>
          
          <main className="beers-main">
            <div className="beers-grid">
              {filteredBeers.map((beer) => (
                <div key={beer.id} className="beer-card" data-brewery={beer.brewery_id} onClick={() => openBeerDetails(beer)}>
                  <img src={beer.image} alt={beer.name} />
                  <div className="beer-info">
                    <h3>{beer.name}</h3>
                    <p className="brewery">{breweries.find(b => b.id_brewery === beer.brewery_id)?.name}</p>
                    <p className="type">{beer.category_id}</p>
                    <p className="volume">{beer.volume}</p>
                    <p className="price">{beer.price!.toFixed(2)} €</p>
                  </div>
                  <button 
                    className="favorite-button"
                    onClick={(e) => toggleFavorite(e, beer.id)}
                  >
                    {favorites.includes(beer.id) ? 
                      <FaHeart className="heart-icon filled" /> : 
                      <FaRegHeart className="heart-icon" />
                    }
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Modal de détails de la bière */}
      {selectedBeer && (
        <div className="beer-modal-overlay" onClick={() => setSelectedBeer(null)}>
          <div className="beer-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedBeer(null)}>&times;</button>
            <div className="beer-modal-header">
              <img src={selectedBeer.image} alt={selectedBeer.name} className="modal-beer-image" />
              <div className="modal-beer-info">
                <h2>{selectedBeer.name}</h2>
                <p className="modal-brewery">{breweries.find(b => b.id_brewery === selectedBeer.brewery_id)?.name}</p>
                <p className="modal-type">{selectedBeer.category_id}</p>
                <p className="modal-volume">{selectedBeer.volume}</p>
                <p className="modal-price">{selectedBeer.price!.toFixed(2)} €</p>
                <button 
                  className="modal-favorite-button"
                  onClick={(e) => toggleFavorite(e, selectedBeer.id)}
                >
                  {favorites.includes(selectedBeer.id) ? 
                    <FaHeart className="heart-icon filled" /> : 
                    <FaRegHeart className="heart-icon" />
                  }
                  {favorites.includes(selectedBeer.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beers;
