-- 03-CREATE-triggers.sql

-- Trigger for Users table
CREATE TRIGGER users_updated_at_trigger BEFORE UPDATE ON Users
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Beers table
CREATE TRIGGER beers_updated_at_trigger BEFORE UPDATE ON Beers
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Categories table
CREATE TRIGGER categories_updated_at_trigger BEFORE UPDATE ON Categories
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Breweries table
CREATE TRIGGER breweries_updated_at_trigger BEFORE UPDATE ON Breweries
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Reviews table
CREATE TRIGGER reviews_updated_at_trigger BEFORE UPDATE ON Reviews
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Favorites table
CREATE TRIGGER favorites_updated_at_trigger BEFORE UPDATE ON Favorites
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Photos table
CREATE TRIGGER photos_updated_at_trigger BEFORE UPDATE ON Photos
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Trigger for Ingredients table
CREATE TRIGGER ingredients_updated_at_trigger BEFORE UPDATE ON Ingredients
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
content_copy
Use code with caution.
SQL




