# 🍺 Optimisation du format Markdown pour le README

## 📋 Projet : Gestion de Brasseries

Ce projet fournit une API permettant de gérer des brasseries. Voici un guide simple pour vous aider à configurer le projet, lancer les services nécessaires, et tester l’API.

## 🛠️ Prérequis

1. Logiciels nécessaires :
    - Git
    - Docker Desktop
    - Node.js et npm
    - Postman

## 🚀 Étapes d’installation

### 1. Cloner le projet

Téléchargez le dépôt sur votre machine locale en exécutant ces commandes dans un terminal :

```bash
git clone <https://github.com/sergeimlk/NpmNodeExpress.git>
cd <NOM_DU_PROJET>
```

### 2. Installer les dépendances

Installez les dépendances Node.js nécessaires :

```bash
npm install
```

### 3. Configurer l’environnement

Créez un fichier `.env` à la racine du projet et ajoutez-y ces variables d’environnement :

```env
DB_USER=postgres
DB_PASSWORD=securepassword
DB_HOST=localhost
DB_DATABASE=postgres
DB_PORT=5432
PORT=3000
```

### 4. Lancer Docker et la base de données

1. Assurez-vous que Docker est actif.
2. Lancez les services définis dans le fichier `docker-compose.yml` :

```bash
docker-compose up -d
```

### 5. Créer un utilisateur PostgreSQL

1. Accédez au conteneur PostgreSQL :

```bash
docker exec -it zythologue-db psql -U postgres
```

2. Créez l’utilisateur nécessaire avec ces commandes :

```sql
CREATE USER zythologue_user WITH PASSWORD 'securepassword';
GRANT ALL PRIVILEGES ON DATABASE postgres TO zythologue_user;
\q
```

### 6. Démarrer le serveur

Lancez le serveur Node.js en mode développement :

```bash
npm run dev
```

Vous verrez dans le terminal un message indiquant que le serveur est en cours d’exécution sur [http://localhost:3000](http://localhost:3000).

## 🧪 Tester l’API avec Postman

### Effectuer une requête GET

1. Ouvrez Postman.
2. Configurez une requête GET avec l’URL suivante :

```url
http://localhost:3000/api/v1/breweries
```

3. Cliquez sur **Send**.

### Résultat attendu

Si tout est configuré correctement, la réponse sera similaire à :

```json
[
     {
          "id_brewery": 1,
          "name": "Etxeko Bobs Beer",
          "country": "France",
          "region": "Pays Basque",
          "address": "123 Rue de la Bière, Hasparren",
          "facebook_link": "https://www.facebook.com/etxekobobsbeer",
          "created_at": "2024-11-22T16:07:10.244Z",
          "updated_at": "2024-11-22T16:07:10.244Z"
     },
     {
          "id_brewery": 2,
          "name": "Brasserie Belharra",
          "country": "France",
          "region": "Pays Basque",
          "address": "456 Avenue de la Bière, Bayonne",
          "facebook_link": "https://www.facebook.com/brasseriebelharra",
          "created_at": "2024-11-22T16:07:10.244Z",
          "updated_at": "2024-11-22T16:07:10.244Z"
     },
     {
          "id_brewery": 3,
          "name": "Brasserie des Docks",
          "country": "France",
          "region": "Pays Basque",
          "address": "789 Boulevard de la Bière, Biarritz",
          "facebook_link": "https://www.facebook.com/brasseriedesdocks",
          "created_at": "2024-11-22T16:07:10.244Z",
          "updated_at": "2024-11-22T16:07:10.244Z"
     }
]
```

## 🛠️ Dépannage

- **Erreur : ECONNREFUSED**
  - Vérifiez que votre serveur Node.js est bien démarré avec `npm run dev`.
  - Assurez-vous que Docker fonctionne correctement avec `docker ps`.
- **Erreur : role "zythologue_user" does not exist**
  - Reconnectez-vous au conteneur PostgreSQL et recréez l’utilisateur comme expliqué à l’étape 5.

Vous avez maintenant configuré et testé votre API ! 🎉
