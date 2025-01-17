import React, { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';

const slides = [
  {
    id: 1,
    label: "Nouveau",
    title: "Brasserie EGUZKI",
    subtitle: "En exclusivité chez Zytho",
    description: "Livraison gratuite pour toute commande supérieure à 3000€ directement à votre soirée !",
    image: "https://brasseriedupaysbasque.com/wp-content/uploads/2021/11/carton-eguzki-COMPLET-768x681.jpg"
  },
  {
    id: 2,
    label: "Brasserie Basque",
    title: "Bières Belharra",
    subtitle: "L'esprit du Pays Basque",
    description: "Découvrez les saveurs authentiques de la brasserie Belharra, directement du cœur du Pays Basque.",
    image: "https://www.belharra.eus/files/BIERES/baleharra-33-blonde.png"
  },
  {
    id: 3,
    label: "Nouveauté",
    title: "Pack Dégustation",
    subtitle: "Sélection Premium",
    description: "Un assortiment unique de nos meilleures bières artisanales.",
    image: "https://media.carrefour.fr/medias/4ccd950b18f53b6f9a4e08011363f52d/p_1500x1500/03760220898142-a1n1-s01.jpg"
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/beers?search=${encodeURIComponent(query)}`);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
  }, [currentSlide, changeSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  }, [currentSlide, changeSlide]);

  const goToSlide = useCallback((index: number) => {
    changeSlide(index);
  }, [changeSlide]);

  // Optional: Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide, isTransitioning]);

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1>Découvrez les Meilleures Bières Artisanales</h1>
        </div>
      </div>
      <div className="hero-slider">
        <button 
          className="slider-nav prev" 
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          ‹
        </button>
        <button 
          className="slider-nav next" 
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          ›
        </button>

        <div className="hero-slides-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-content">
                <div className="hero-text">
                  <div className="new-label">{slide.label}</div>
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="hero-image">
                  <img src={slide.image} alt={slide.title} />
                  <Link to="/beers" className="btn btn-dark">
                    Plus de bières
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <section className="home-carousel">
        <h2>Découvrez notre sélection</h2>
        <ImageCarousel />
      </section>
    </div>
  );
};

export default Home;
