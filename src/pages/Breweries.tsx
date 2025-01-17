import React, { useState, useEffect } from 'react';
import '../styles/Breweries.css';
import { Link } from 'react-router-dom';
import { FaClock, FaHeart, FaTimes } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import { apiService } from '../services/api.service';
import { Brewery as ApiBrewery } from '../types/api.types';
import { Beer } from '../types/api.types';

interface Brewery extends ApiBrewery {
  location: string;
  description: string;
  image: string;
  website: string;
  specialties: string[];
}

interface BreweryModalProps {
  brewery: Brewery;
  onClose: () => void;
  beers: Beer[];
}

const BreweryModal: React.FC<BreweryModalProps> = ({ brewery, onClose, beers }) => {
  return (
    <div className="brewery-modal-overlay" onClick={onClose}>
      <div className="brewery-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="brewery-modal-header">
          <img src={brewery.image} alt={brewery.name} className="brewery-modal-image" />
          <div className="brewery-modal-title">
            <h2>{brewery.name}</h2>
            <p className="location">{brewery.location}</p>
          </div>
        </div>
        <div className="brewery-modal-body">
          <div className="brewery-modal-description">
            <h3>À propos</h3>
            <p>{brewery.description}</p>
          </div>
          <div className="brewery-modal-beers">
            <h3>🍻Nos Bières🍻</h3>
            <div className="beers-grid">
              {beers.map(beer => (
                <div key={beer.id_beer} className="beer-card-mini">
                  <h4>{beer.name}</h4>
                  <p className="beer-description">{beer.description}</p>
                  <p className="beer-details">
                    <span className="abv">{beer.abv}% ABV</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="brewery-modal-footer">
            <a href={brewery.website} target="_blank" rel="noopener noreferrer" className="website-button">
              Visiter le site web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const breweryFeatures = [
  {
    id: 1,
    title: "Guide de nos brasseries",
    subtitle: "Découvrez notre sélection",
    image: "https://brasseriedupaysbasque.com/wp-content/uploads/2021/11/carton-eguzki-COMPLET-768x681.jpg",
    duration: "5 minutes",
    category: "Guide"
  },
  {
    id: 2,
    title: "Visite et dégustation",
    subtitle: "Expérience unique",
    image: "https://produits.bienmanger.com/36740-0w600h600_Pale_Ale_Etxeko_Beer_From_French_Basque_Country.jpg",
    duration: "2 heures",
    category: "Visite"
  },
  {
    id: 3,
    title: "L'art du brassage",
    subtitle: "Tradition basque",
    image: "https://www.belharra.eus/files/BIERES/baleharra-33-blonde.png",
    duration: "3 minutes",
    category: "Article"
  }
];

// Images et descriptions par défaut pour les nouvelles brasseries
const defaultBreweryData = {
  description: "Une brasserie artisanale authentique produisant des bières de caractère.",
  image: "https://www.mesbieres.fr/wp-content/uploads/2022/01/Belharra-cover-e1641227489358.jpg",
  website: "#",
  specialties: ["Blonde", "Ambrée", "IPA"]
};

// Données spécifiques pour certaines brasseries
const brewerySpecificData: { [key: string]: Partial<Brewery> } = {
  "Brasserie des Montagnes": {
    description: "Située au cœur des montagnes françaises, cette brasserie produit des bières d'exception inspirées par l'air pur des sommets.",
    image: "https://www.mesbieres.fr/wp-content/uploads/2022/01/Belharra-cover-e1641227489358.jpg",
    specialties: ["Blonde des Montagnes", "Triple d'Altitude", "Ambrée des Cimes"]
  },
  "Bière de la Vallée": {
    description: "Une brasserie traditionnelle belge perpétuant le savoir-faire ancestral des moines brasseurs.",
    image: "https://cdt64.media.tourinsoft.eu/upload/2E2A5848-copie.jpg",
    specialties: ["Triple d'Abbaye", "Cuvée des Moines", "Blonde Dorée"]
  },
  "La Micro du Soleil": {
    description: "Brasserie artisanale canadienne spécialisée dans les bières houblonnées et rafraîchissantes.",
    image: "https://brasseriedupaysbasque.com/wp-content/uploads/2021/11/carton-eguzki-COMPLET-768x681.jpg",
    specialties: ["IPA du Soleil", "Pale Ale Tropicale", "Session IPA"]
  }
};

const Breweries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);
  const [breweryBeers, setBreweryBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const apiBreweries = await apiService.getAllBreweries();
        
        // Filtrer les brasseries avec des données valides (non "string")
        const validBreweries = apiBreweries.filter(brewery => 
          brewery.name !== "string" && brewery.country !== "string"
        );
        
        const enhancedBreweries: Brewery[] = validBreweries.map(brewery => {
          // Vérifier si nous avons des données spécifiques pour cette brasserie
          const specificData = brewerySpecificData[brewery.name] || {};
          
          return {
            ...brewery,
            location: `${brewery.country}`,
            description: specificData.description || defaultBreweryData.description,
            image: specificData.image || defaultBreweryData.image,
            website: specificData.website || defaultBreweryData.website,
            specialties: specificData.specialties || defaultBreweryData.specialties
          };
        });

        setBreweries(enhancedBreweries);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des brasseries');
        setLoading(false);
        console.error('Erreur:', err);
      }
    };

    fetchBreweries();
  }, []);

  const handleBreweryClick = async (brewery: Brewery) => {
    try {
      const beers = await apiService.getAllBeers();
      // Filtrer les bières valides pour cette brasserie
      const breweryBeers = beers
        .filter(beer => beer.brewery_id === brewery.id_brewery)
        .map(beer => ({
          ...beer,
          name: beer.name === "string" ? "Bière Artisanale" : beer.name,
          description: beer.description === "string" ? 
            "Une bière artisanale unique avec des saveurs authentiques." : 
            beer.description
        }));

      setBreweryBeers(breweryBeers);
      setSelectedBrewery(brewery);
    } catch (err) {
      console.error('Erreur lors du chargement des bières:', err);
    }
  };

  const handleCloseModal = () => {
    setSelectedBrewery(null);
    setBreweryBeers([]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBreweries = breweries.filter(brewery =>
    brewery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brewery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brewery.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brewery.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="breweries-container">
      <h1 className="page-title">🏭 Nos Brasseries Locales 🏭 </h1>
      
      {selectedBrewery && (
        <BreweryModal
          brewery={selectedBrewery}
          onClose={handleCloseModal}
          beers={breweryBeers}
        />
      )}

      <section className="features-section">
        <div className="brewery-cards">
          {breweryFeatures.map((card) => (
            <div key={card.id} className="feature-card">
              <div className="card-overlay"></div>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <div className="card-header">
                  <span className="duration">
                    <FaClock /> {card.duration}
                  </span>
                  <span className="category">{card.category}</span>
                  <button className="favorite-btn">
                    <FaHeart />
                  </button>
                </div>
                <h2>{card.title}</h2>
                <p>{card.subtitle}</p>
                <Link to="#" className="card-arrow">→</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="breweries-section">
        <div className="search-container">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Rechercher une brasserie..."
            className="brewery-search"
          />
        </div>
        <div className="breweries-grid">
          {filteredBreweries.map(brewery => (
            <div 
              key={brewery.id_brewery} 
              className="brewery-detail-card"
              onClick={() => handleBreweryClick(brewery)}
            >
              <div className="brewery-header">
                <h2>{brewery.name}</h2>
                <p className="location">{brewery.location}</p>
              </div>
              <div className="brewery-content">
                <div className="brewery-image">
                  <img src={brewery.image} alt={brewery.name} />
                </div>
                <p className="description">{brewery.description}</p>
                <div className="specialties">
                  <h3>Nos bières:</h3>
                  <div className="specialty-tags">
                    {brewery.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
                <a 
                  href={brewery.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="website-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visiter le site web →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Breweries;
