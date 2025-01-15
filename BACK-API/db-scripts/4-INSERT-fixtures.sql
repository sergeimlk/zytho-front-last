-- 04-INSERT-fixtures.sql

-- Insert data into Users table
INSERT INTO Users (first_name, email, password) VALUES
('Jean', 'jean@example.com', 'password1'),
('Marie', 'marie@example.com', 'password2'),
('Pierre', 'pierre@example.com', 'password3'),
('Sophie', 'sophie@example.com', 'password4');

-- Insert data into Breweries table
INSERT INTO Breweries (name, country, region, address, facebook_link) VALUES
('Etxeko Bobs Beer', 'France', 'Pays Basque', '123 Rue de la Bière, Hasparren', 'https://www.facebook.com/etxekobobsbeer'),
('Brasserie Belharra', 'France', 'Pays Basque', '456 Avenue de la Bière, Bayonne', 'https://www.facebook.com/brasseriebelharra'),
('Brasserie des Docks', 'France', 'Pays Basque', '789 Boulevard de la Bière, Biarritz', 'https://www.facebook.com/brasseriedesdocks');

-- Insert data into Ingredients table
INSERT INTO Ingredients (name, type) VALUES
('Malt', 'Grain'),
('Houblon', 'Houblon'),  -- Corrected typo here.  It was "Hops" in English.
('Levure', 'Levure'), -- Corrected to French
('Eau', 'Eau');      -- Corrected to French

-- Insert data into Categories table
INSERT INTO Categories (name) VALUES
('Lager'),
('Ale'),
('Stout'),
('IPA');

-- Insert data into Beers table
INSERT INTO Beers (name, description, abv, type, color, release_date, id_brewery) VALUES
('Bobs Lager', 'Une lager légère et rafraîchissante', 4.5, 'Lager', 'Dorée', '2023-01-01', 1),  -- Couleur in French
('Belharra Ale', 'Une ale douce et fruitée', 5.2, 'Ale', 'Ambrée', '2023-02-01', 2),   -- Couleur in French
('Docks Stout', 'Un stout fort et robuste', 6.8, 'Stout', 'Noire', '2023-03-01', 3),    -- Couleur in French
('IPA Basque', 'Une IPA houblonnée et savoureuse', 6.0, 'IPA', 'Dorée', '2023-04-01', 1); -- Couleur in French


-- Insert data into BeerIngredients table
INSERT INTO BeerIngredients (id_beer, id_ingredient) VALUES
(1, 1), (1, 2), (1, 3), (1, 4),
(2, 1), (2, 2), (2, 3), (2, 4),
(3, 1), (3, 2), (3, 3), (3, 4),
(4, 1), (4, 2), (4, 3), (4, 4);

-- Insert data into BeerCategories table
INSERT INTO BeerCategories (id_beer, id_category) VALUES
(1, 1), (2, 2), (3, 3), (4, 4);

-- Insert data into Reviews table
INSERT INTO Reviews (id_user, id_beer, rating, comment) VALUES
(1, 1, 4, 'Très bonne bière!'),
(2, 2, 5, 'Goût exceptionnel.'),
(3, 3, 3, 'Pas mal.'),
(4, 4, 4, 'Houblonnée et délicieuse.');

-- Insert data into Favorites table
INSERT INTO Favorites (id_user, id_beer) VALUES
(1, 1), (2, 2), (3, 3), (4, 4);

-- Insert data into Photos table
INSERT INTO Photos (id_beer, url) VALUES
(1, 'https://etxekobobsbeer.com/images/bobs_lager.jpg'),
(2, 'https://brasseriebelharra.com/images/belharra_ale.jpg'),
(3, 'https://brasseriedesdocks.com/images/docks_stout.jpg'),
(4, 'https://etxekobobsbeer.com/images/ipa_basque.jpg');
content_copy
Use code with caution.
SQL

Key Changes and Explanations:

03-CREATE-triggers.sql: Now includes all the necessary triggers for each table to update the updated_at column. The update_updated_at_column() function is shown here for completeness but it would normally reside in your 02-CREATE-functions.sql file.

04-INSERT-fixtures.sql:

French Corrections: Minor corrections made to the French translations for ingredient types and beer colors for consistency. (e.g., "Hops" -> "Houblon", "Golden" -> "Dorée", etc.)

Formatting: Improved readability with minor formatting adjustments to the INSERT statements.

These complete files provide a solid foundation for your database setup. Remember to execute the SQL files in the correct order (01, then 02, then 03, then 04). This will ensure tables are created, functions are defined, triggers are set up, and then the sample data is inserted.