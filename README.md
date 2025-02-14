# 🍺 Zytho - Application de Bières

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbml2MWV3Z2pqN2xuM2FxYXF2dHpzcTBxMzA1Nm54dGVhMGQyenlzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTgzmGzanMnhiwsBql/giphy.gif" width="200" />

Bienvenue sur mon application de découverte de bières! Cette application web moderne vous permet d'explorer une vaste collection de bières artisanales, de découvrir leurs caractéristiques et de gérer vos favorites.

## 📋 Table des Matières

<!-- <img src="https://media.giphy.com/media/l3vRc1zy8NBqe342I/giphy.gif" width="150" /> -->

- [🚀 Prérequis](#-prérequis)
- [⚙️ Installation](#️-installation)
- [🎮 Lancement du Projet](#-lancement-du-projet)
- [🛠️ Technologies Utilisées](#️-technologies-utilisées)
- [📱 Fonctionnalités](#-fonctionnalités)
- [🔧 Configuration](#-configuration)
- [📝 Notes de Développement](#-notes-de-développement)
- [🚀 Déploiement sur Vercel](#-déploiement-sur-vercel)

## 🚀 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 16.0.0 ou supérieure) 📦
- npm (version 8.0.0 ou supérieure) 🔧
- Git 🌳
- Docker Desktop 🐳

<img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="150" />

## ⚙️ Installation

1. **Clonez le repository** 📥
```bash
git clone https://github.com/sergeimlk/zytho.git
cd zytho
```

2. **Configuration du Backend** 🔧
```bash
# Aller dans le dossier backend
cd BACK-API

# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.example .env
```

3. **Configurer le fichier .env du Backend** ⚙️
```env
DB_USER=postgres
DB_PASSWORD=securepassword
DB_HOST=localhost
DB_DATABASE=postgres
DB_PORT=5432
PORT=3000
```

4. **Configuration du Frontend** 🔧
```bash
# Retourner au dossier principal
cd ..

# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.example .env
```

<img src="https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" width="150" />

## 🎮 Lancement du Projet

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDlpb3g5MXkyOHR5YjYxN3c0MThib3J6Z2JrMTV3b3hkZnVqcTF5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3jwwe1xIpkDZXQXn3/giphy.gif" width="150" />

1. **Lancer la base de données** 🗄️
```bash
# Dans le dossier BACK-API
cd BACK-API
docker-compose up -d
```
✅ La base de données est prête quand vous voyez "zythologue-db Started"

2. **Lancer le backend** 🚀
```bash
# Toujours dans BACK-API
npm start
```
✅ Le backend est prêt quand vous voyez "Server is running on port 3000"

3. **Lancer le frontend** 💻
```bash
# Retourner au dossier principal
cd ..
npm run dev
```
✅ Le frontend est prêt quand vous voyez l'URL locale (http://localhost:5173)

4. **Accéder à l'application** 🌐
- Ouvrez votre navigateur
- Accédez à http://localhost:5173
- Naviguez vers la page "Bières" pour voir toutes les bières de la base de données

### En cas de problèmes 🔧

1. **Docker ne démarre pas**
- Vérifiez que Docker Desktop est lancé (icône verte dans la barre de menu)
- Redémarrez Docker Desktop si nécessaire

2. **La base de données ne se connecte pas**
```bash
# Vérifier que le container est bien lancé
docker ps
# Vous devriez voir "zythologue-db" dans la liste
```

3. **Le backend ne démarre pas**
- Vérifiez que la base de données est bien lancée
- Vérifiez les variables d'environnement dans `BACK-API/.env`

4. **Le frontend ne charge pas les données**
- Vérifiez que le backend tourne sur http://localhost:3000
- Vérifiez les logs du backend

## 🛠️ Technologies Utilisées

- **React** ⚛️ - Bibliothèque UI
- **TypeScript** 📘 - Typage statique
- **Vite** ⚡ - Build tool
- **React Router** 🛣️ - Navigation
- **React Query** 📊 - Gestion des états et du cache
- **Axios** 🔄 - Client HTTP
- **CSS Modules** 🎨 - Styling
<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXc5eHdnNzlkZG1sNXdsejRsdnc2b3Z0ZzM2Mmh5emw0YjB5eGF4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qn74oPyaKYBpVWdA7t/giphy.gif" width="150" />

## 📱 Fonctionnalités

- **Catalogue de Bières** 🍺
  - Recherche par nom
  - Filtrage par caractéristiques
  - Pagination
  
- **Système de Favoris** ⭐
  - Sauvegarde locale
  - Gestion des favoris
  
- **Interface Responsive** 📱
  - Design adaptatif
  - Mode sombre par défaut
  
- **Performance** ⚡
  - Chargement optimisé
  - Mise en cache des requêtes

<img src="https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif" width="150" />


## 🔧 Configuration


### Scripts Disponibles

- `npm run start` - Démarre l'application en mode production 🚀
- `npm run dev` - Lance le serveur de développement 🔧
- `npm run build` - Crée la version de production 🏗️
- `npm run preview` - Prévisualise la version de production 👀
- `npm run lint` - Vérifie le code avec ESLint 🔍
- `npm run format` - Formate le code avec Prettier ✨
<img src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif" width="150" />


### Structure des Dossiers 📁


```
src/
├── components/     # Composants réutilisables
├── pages/         # Pages de l'application
├── styles/        # Fichiers CSS
├── hooks/         # Hooks personnalisés
├── context/       # Contextes React
├── types/         # Types TypeScript
└── utils/         # Fonctions utilitaires
```
<img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" width="150" />


## 📝 Notes de Développement

<img src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" width="150" />

### Conventions de Code 📚

- Utilisation de TypeScript strict
- Composants fonctionnels avec hooks
- CSS Modules pour le styling
- Tests unitaires pour les composants critiques

### Bonnes Pratiques 🌟

<img src="https://media.giphy.com/media/l2Sq29cFXoF80ADlK/giphy.gif" width="150" />

1. **Commits**
   - Messages clairs et descriptifs
   - Une fonctionnalité par commit

2. **Code**
   - Documentation des fonctions complexes
   - Types TypeScript explicites
   - Composants réutilisables

### Résolution des Problèmes Courants 🔧

<!-- <img src="https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif" width="150" /> -->

1. **Erreur de build**
```bash
rm -rf node_modules
npm install
```

2. **Problèmes de cache**
```bash
npm run dev -- --force
```

3. **Erreurs TypeScript**
- Vérifiez les types dans `src/types`
- Mettez à jour les dépendances

## 🚀 Déploiement sur Vercel

Pour déployer ce projet sur Vercel :

1. **Configuration du Projet**
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. **Variables d'Environnement**
   Assurez-vous de configurer les variables d'environnement nécessaires dans les paramètres du projet Vercel :
   ```env
   VITE_API_URL=votre_url_api
   ```

3. **Déploiement Automatique**
   - Le déploiement se fait automatiquement à chaque push sur la branche `main`
   - Vercel créera automatiquement des previews pour chaque pull request

## 🤝 Contribution

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5mMXE1aTd0Z3RyOGF2ZzA0dXdsZjdvc2U2aTN4OHlvYWN0ZzY4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pHb82xtBPfqEg/giphy.gif" width="150" />

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📫 Contact


Pour toute question ou suggestion, n'hésitez pas à me contacter :
- Email 📧 : sergei.mlk@hotmail.com
- LinkedIn 💼 : [Votre Profil](https://github.com/sergeimlk)

## 📄 Licence

Ce projet est Un brief effectué pour la formation, CDA chez Simplon


---

⭐️ Si vous aimez ce projet, n'hésitez pas à lui mettre une étoile sur GitHub !

<img src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" width="150" />
<img src="https://media.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif" width="150" />
<img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" width="150" />



docker-compose down && docker-compose up --build