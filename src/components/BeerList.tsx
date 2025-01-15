import { useState, useEffect } from 'react';
import { api } from '../services/api';

interface Beer {
  id: string;
  name: string;
  description?: string;
  // Ajoutez d'autres propriétés selon votre modèle de données
}

export const BeerList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const data = await api.getAllBeers();
        setBeers(data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des bières');
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {beers.map((beer) => (
        <div key={beer.id} className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold">{beer.name}</h2>
          {beer.description && <p className="mt-2">{beer.description}</p>}
        </div>
      ))}
    </div>
  );
};
