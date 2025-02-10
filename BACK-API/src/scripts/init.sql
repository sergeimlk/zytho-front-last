-- Création des tables
CREATE TABLE IF NOT EXISTS breweries (
  id_brewery SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  region VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS beers (
  id_beer SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  abv DECIMAL(4,2) NOT NULL,
  description TEXT,
  brewery_id INTEGER REFERENCES breweries(id_brewery),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des données de test
INSERT INTO breweries (name, country, region) VALUES
  ('Brasserie Akerbeltz', 'France', 'Pays Basque'),
  ('Brasserie Oldarki', 'France', 'Pays Basque'),
  ('Brasserie Kipett', 'France', 'Pays Basque');

INSERT INTO beers (name, type, abv, description, brewery_id) VALUES
  ('Akerbeltz Blonde', 'Blonde', 5.5, 'Bière blonde légère et rafraîchissante', 1),
  ('Oldarki Ambrée', 'Ambrée', 6.2, 'Bière ambrée aux notes caramélisées', 2),
  ('Kipett IPA', 'IPA', 6.8, 'IPA houblonnée aux arômes d''agrumes', 3); 