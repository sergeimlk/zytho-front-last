import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = 'mongodb://admin:password123@localhost:27017/zytho?authSource=admin';

// Données de test pour les brasseries
const breweries = [
  {
    name: "Brasserie Akerbeltz",
    country: "France",
    region: "Pays Basque"
  },
  {
    name: "Brasserie Oldarki",
    country: "France",
    region: "Pays Basque"
  },
  {
    name: "Brasserie Kipett",
    country: "France",
    region: "Pays Basque"
  }
];

// Données de test pour les bières
const beers = [
  {
    name: "Akerbeltz Blonde",
    type: "Blonde",
    abv: 5.5,
    description: "Bière blonde légère et rafraîchissante",
    brewery_id: null // Sera mis à jour après la création des brasseries
  },
  {
    name: "Oldarki Ambrée",
    type: "Ambrée",
    abv: 6.2,
    description: "Bière ambrée aux notes caramélisées",
    brewery_id: null
  },
  {
    name: "Kipett IPA",
    type: "IPA",
    abv: 6.8,
    description: "IPA houblonnée aux arômes d'agrumes",
    brewery_id: null
  }
];

async function initializeDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connecté à MongoDB');

    // Création des modèles
    const BreweryModel = mongoose.model('Brewery', new mongoose.Schema({
      name: String,
      country: String,
      region: String
    }));

    const BeerModel = mongoose.model('Beer', new mongoose.Schema({
      name: String,
      type: String,
      abv: Number,
      description: String,
      brewery_id: mongoose.Schema.Types.ObjectId
    }));

    // Suppression des données existantes
    await BreweryModel.deleteMany({});
    await BeerModel.deleteMany({});

    // Insertion des brasseries
    const createdBreweries = await BreweryModel.insertMany(breweries);
    console.log('Brasseries créées');

    // Mise à jour des IDs de brasserie pour les bières
    const beersWithBreweries = beers.map((beer, index) => ({
      ...beer,
      brewery_id: createdBreweries[index % createdBreweries.length]._id
    }));

    // Insertion des bières
    await BeerModel.insertMany(beersWithBreweries);
    console.log('Bières créées');

    console.log('Base de données initialisée avec succès');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
    process.exit(1);
  }
}

initializeDatabase(); 