import '../styles/ImageCarousel.css';

// Images des bières
const images = [
  'https://www.belharra.eus/files/BIERES/baleharra-33-blonde.png',
  'https://th.bing.com/th/id/R.c32e53e78aed55ffa115bd5bdb62e2a5?rik=tJj6twTPVkSmfQ&riu=http%3a%2f%2fbelharra.eus%2ffiles%2fBIERES%2fbelharra-blanche.png&ehk=hIYAQfSeUZVyhZXm%2b8atvdFZaQT82WsrRfTgWKMPmXU%3d&risl=&pid=ImgRaw&r=0',
  'https://www.belharra.eus/files/BIERES/baleharra-33-ambree.png',
  'https://brasseriedupaysbasque.com/wp-content/uploads/2021/11/carton-eguzki-COMPLET-768x681.jpg',
  'https://produits.bienmanger.com/36740-0w600h600_Pale_Ale_Etxeko_Beer_From_French_Basque_Country.jpg',
  'https://media.carrefour.fr/medias/4ccd950b18f53b6f9a4e08011363f52d/p_1500x1500/03760220898142-a1n1-s01.jpg',
  'https://produits.bienmanger.com/35363-0w0h0_Eguzki_Ambree_Biere_Pays_Basque.jpg',
  'https://produits.bienmanger.com/35362-0w600h600_Eguzki_Lager_Beer_From_French_Basque_Country.jpg',
  // Ajoutez ici toutes les images de votre application
];

const ImageCarousel = () => {
  // Dupliquer les images pour créer un effet de défilement infini
  const duplicatedImages = [...images, ...images];

  return (
    <div className="carousel-container">
      <div className="carousel-row">
        <div className="carousel-track">
          {duplicatedImages.map((image, index) => (
            <div key={`top-${index}`} className="carousel-item">
              <img src={image} alt={`Carousel image ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Dupliquer le track pour un défilement infini */}
        <div className="carousel-track">
          {duplicatedImages.map((image, index) => (
            <div key={`top-duplicate-${index}`} className="carousel-item">
              <img src={image} alt={`Carousel image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-row reverse">
        <div className="carousel-track">
          {duplicatedImages.map((image, index) => (
            <div key={`bottom-${index}`} className="carousel-item">
              <img src={image} alt={`Carousel image ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Dupliquer le track pour un défilement infini */}
        <div className="carousel-track">
          {duplicatedImages.map((image, index) => (
            <div key={`bottom-duplicate-${index}`} className="carousel-item">
              <img src={image} alt={`Carousel image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
