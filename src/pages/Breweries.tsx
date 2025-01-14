import React, { useState } from 'react';
import '../styles/Breweries.css';
import { Link } from 'react-router-dom';
import { FaClock, FaHeart } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

interface Brewery {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  website: string;
  specialties: string[];
}

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

const breweries: Brewery[] = [
  {
    id: 1,
    name: "Brasserie Belharra",
    location: "Bayonne, Pays Basque",
    description: "Située au cœur du Pays Basque, la Brasserie Belharra produit des bières artisanales de caractère inspirées par l'esprit basque.",
    image: "https://www.mesbieres.fr/wp-content/uploads/2022/01/Belharra-cover-e1641227489358.jpg",
    website: "https://belharra.fr",
    specialties: ["Blonde Basque", "IPA Euskal", "Ambrée des Pyrénées"]
  },
  {
    id: 2,
    name: "Bob's Beer",
    location: "Bidart, Pays Basque",
    description: "Bob's Beer est une micro-brasserie artisanale créée par des passionnés de surf et de bière.",
    image: "https://cdt64.media.tourinsoft.eu/upload/2E2A5848-copie.jpg?width=1800",
    website: "https://bobsbeer.fr",
    specialties: ["Session IPA", "Pacific Pale Ale", "Summer Blonde"]
  },
  {
    id: 3,
    name: "Brasserie Eguzki",
    location: "Pays Basque",
    description: "Une brasserie authentique qui incarne l'esprit du Pays Basque dans chacune de ses créations.",
    image: "https://brasseriedupaysbasque.com/wp-content/uploads/2021/11/carton-eguzki-COMPLET-768x681.jpg",
    website: "https://eguzki.fr",
    specialties: ["Blonde Traditionnelle", "Ambrée du Pays", "Blanche Légère"]
  }
];

const Breweries = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="breweries-container">
      <h1 className="page-title">🏭 Nos Brasseries Locales</h1>
      <section className="features-section">
        {/* <h1>Découvrez nos brasseries</h1> */}
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
            <div key={brewery.id} className="brewery-detail-card">
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
                <a href={brewery.website} target="_blank" rel="noopener noreferrer" className="website-link">
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
