import React, { createContext, useContext, useState, useEffect } from 'react';
import { Beer } from '../types/api.types';

interface FavoritesContextType {
  favorites: Beer[];
  addFavorite: (beer: Beer) => void;
  removeFavorite: (beerId: number) => void;
  isFavorite: (beerId: number) => boolean;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Beer[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (beer: Beer) => {
    setFavorites(prev => {
      if (!prev.some(fav => fav.id_beer === beer.id_beer)) {
        return [...prev, beer];
      }
      return prev;
    });
  };

  const removeFavorite = (beerId: number) => {
    setFavorites(prev => prev.filter(beer => beer.id_beer !== beerId));
  };

  const isFavorite = (beerId: number) => {
    return favorites.some(beer => beer.id_beer === beerId);
  };

  return (
    <FavoritesContext.Provider 
      value={{ 
        favorites, 
        addFavorite, 
        removeFavorite, 
        isFavorite,
        favoritesCount: favorites.length 
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
