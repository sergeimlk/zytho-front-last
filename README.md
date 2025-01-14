# 🍺 Zytho - Application de Bières Craft

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    Bienvenue sur mon application de découverte de bières craft ! Cette application web moderne vous permet d'explorer une vaste collection de bières artisanales, de découvrir leurs caractéristiques et de gérer vos favorites.
  </div>
  <img src="https://media.giphy.com/media/3o7TKUZfJKUKuSWTZe/giphy.gif" width="200" align="right" />
</div>

## 📋 Table des Matières

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    - [🚀 Prérequis](#-prérequis)
    - [⚙️ Installation](#️-installation)
    - [🎮 Lancement du Projet](#-lancement-du-projet)
    - [🛠️ Technologies Utilisées](#️-technologies-utilisées)
    - [📱 Fonctionnalités](#-fonctionnalités)
    - [🔧 Configuration](#-configuration)
    - [📝 Notes de Développement](#-notes-de-développement)
  </div>
  <img src="https://media.giphy.com/media/l3vRc1zy8NBqe342I/giphy.gif" width="150" align="right" />
</div>

## 🚀 Prérequis

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    Avant de commencer, assurez-vous d'avoir installé :
    - Node.js (version 16.0.0 ou supérieure) 📦
    - npm (version 8.0.0 ou supérieure) 🔧
    - Git 🌳
  </div>
  <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="150" align="right" />
</div>

## ⚙️ Installation

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    1. **Clonez le repository** 📥
    ```bash
    git clone https://github.com/votre-username/zytho.git
    cd zytho
    ```

    2. **Installez les dépendances** 📦
    ```bash
    npm install
    ```

    3. **Créez votre fichier de variables d'environnement** 🔐
    ```bash
    cp .env.example .env
    ```
  </div>
  <img src="https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" width="150" align="right" />
</div>

## 🎮 Lancement du Projet

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    1. **Mode développement** 🔧
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse : `http://localhost:5173`

    2. **Mode production** 🚀
    ```bash
    npm run build
    npm run preview
    ```
  </div>
  <img src="https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif" width="150" align="right" />
</div>

## 🛠️ Technologies Utilisées

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    - **React** ⚛️ - Bibliothèque UI
    - **TypeScript** 📘 - Typage statique
    - **Vite** ⚡ - Build tool
    - **React Router** 🛣️ - Navigation
    - **React Query** 📊 - Gestion des états et du cache
    - **Axios** 🔄 - Client HTTP
    - **CSS Modules** 🎨 - Styling
  </div>
  <img src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" width="150" align="right" />
</div>

## 📱 Fonctionnalités

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
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
  </div>
  <img src="https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif" width="150" align="right" />
</div>

## 🔧 Configuration

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    ### Scripts Disponibles
    - `npm run dev` - Lance le serveur de développement 🔧
    - `npm run build` - Crée la version de production 🏗️
    - `npm run preview` - Prévisualise la version de production 👀
    - `npm run lint` - Vérifie le code avec ESLint 🔍
    - `npm run format` - Formate le code avec Prettier ✨
  </div>
  <img src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif" width="150" align="right" />
</div>

### Structure des Dossiers 📁

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
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
  </div>
  <img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" width="150" align="right" />
</div>

## 📝 Notes de Développement

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    ### Conventions de Code 📚
    - Utilisation de TypeScript strict
    - Composants fonctionnels avec hooks
    - CSS Modules pour le styling
    - Tests unitaires pour les composants critiques
  </div>
  <img src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" width="150" align="right" />
</div>

### Bonnes Pratiques 🌟

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    1. **Commits**
       - Messages clairs et descriptifs
       - Une fonctionnalité par commit

    2. **Code**
       - Documentation des fonctions complexes
       - Types TypeScript explicites
       - Composants réutilisables
  </div>
  <img src="https://media.giphy.com/media/l2Sq29cFXoF80ADlK/giphy.gif" width="150" align="right" />
</div>

### Résolution des Problèmes Courants 🔧

<div style="display: flex; align-items: start; justify-content: space-between;">
  <div>
    1. **Erreur de build**
    ```bash
    rm -rf node_modules
    npm install
    ```

    2. **Problèmes de cache**
    ```bash
    npm run dev -- --force
    ```
  </div>
  <img src="https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif" width="150" align="right" />
</div>

## 🤝 Contribution

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    Les contributions sont les bienvenues ! N'hésitez pas à :
    1. Fork le projet
    2. Créer une branche
    3. Commit vos changements
    4. Push sur la branche
    5. Ouvrir une Pull Request
  </div>
  <img src="https://media.giphy.com/media/Pb9MeNn9YWN2s/giphy.gif" width="150" align="right" />
</div>

## 📫 Contact

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    Pour toute question ou suggestion, n'hésitez pas à me contacter :
    - Email 📧 : sergei.mlk@hotmail.com
    - LinkedIn 💼 : [Votre Profil](https://github.com/sergeimlk)
  </div>
  <img src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" width="150" align="right" />
</div>

## 📄 Licence

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    Ce projet est Un brief effectué pour la formation, CDA chez Simplon
  </div>
  <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" width="150" align="right" />
</div>

---

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    ⭐️ Si vous aimez ce projet, n'hésitez pas à lui mettre une étoile sur GitHub !
  </div>
  <img src="https://media.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif" width="150" align="right" />
</div>
