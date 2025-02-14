-- Création de la table des brasseries
CREATE TABLE IF NOT EXISTS breweries (
    id_brewery SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    region VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des bières
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

-- Insertion des données de test pour les brasseries
INSERT INTO breweries (name, country, region) VALUES
    ('Brasserie Dupont', 'Belgique', 'Wallonie'),
    ('Chimay', 'Belgique', 'Wallonie'),
    ('Westmalle', 'Belgique', 'Flandre');

-- Insertion des données de test pour les bières
INSERT INTO beers (name, type, abv, description, brewery_id) VALUES
    ('Saison Dupont', 'Saison', 6.5, 'Une bière de ferme traditionnelle belge', 1),
    ('Chimay Bleue', 'Trappiste', 9.0, 'Une trappiste brune forte', 2),
    ('Westmalle Triple', 'Trappiste', 9.5, 'Une triple trappiste dorée', 3); 