CREATE TABLE Users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Breweries (
    id_brewery SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    country VARCHAR(100),
    region VARCHAR(100),
    address VARCHAR(255),
    facebook_link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Ingredients (
    id_ingredient SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Categories (
    id_category SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Beers (
    id_beer SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    abv DECIMAL(3,1) CHECK (abv BETWEEN 0 AND 20),
    type VARCHAR(50),
    color VARCHAR(50),
    release_date DATE,
    id_brewery INT REFERENCES Breweries(id_brewery) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE BeerIngredients (
    id_beer INT REFERENCES Beers(id_beer) ON DELETE CASCADE,
    id_ingredient INT REFERENCES Ingredients(id_ingredient) ON DELETE CASCADE,
    PRIMARY KEY (id_beer, id_ingredient)
);

CREATE TABLE BeerCategories (
    id_beer INT REFERENCES Beers(id_beer) ON DELETE CASCADE,
    id_category INT REFERENCES Categories(id_category) ON DELETE CASCADE,
    PRIMARY KEY (id_beer, id_category)
);

CREATE TABLE Reviews (
    id_review SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id_user) ON DELETE CASCADE,
    id_beer INT REFERENCES Beers(id_beer) ON DELETE CASCADE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Favorites (
    id_favorite SERIAL PRIMARY KEY,
    id_user INT REFERENCES Users(id_user) ON DELETE CASCADE,
    id_beer INT REFERENCES Beers(id_beer) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Photos (
    id_photo SERIAL PRIMARY KEY,
    id_beer INT REFERENCES Beers(id_beer) ON DELETE CASCADE,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
