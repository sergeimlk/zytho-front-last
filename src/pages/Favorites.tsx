import React from 'react';

export const tempFavorites = [
  {
    id: 1,
    name: "Eguzki Ambrée",
    price: 4.80,
    brewery: "Brasserie Eguzki",
    type: "Ambrée",
    volume: "33cl",
    image: "https://produits.bienmanger.com/35363-0w0h0_Eguzki_Ambree_Biere_Pays_Basque.jpg"
  },
  {
    id: 2,
    name: "Eguzki Lager",
    price: 4.50,
    brewery: "Brasserie Eguzki",
    type: "Lager",
    volume: "33cl",
    image: "https://produits.bienmanger.com/35362-0w600h600_Eguzki_Lager_Beer_From_French_Basque_Country.jpg"
  }
];

const Favorites: React.FC = () => {
  return (
    <div>
      {/* Add your Favorites page content here */}
    </div>
  );
};

export default Favorites;
