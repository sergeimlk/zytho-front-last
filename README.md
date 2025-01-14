# 🍺 Zytho - Application de Bières Craft

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbml2MWV3Z2pqN2xuM2FxYXF2dHpzcTBxMzA1Nm54dGVhMGQyenlzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTgzmGzanMnhiwsBql/giphy.gif" width="200" />

Bienvenue sur mon application de découverte de bières craft ! Cette application web moderne vous permet d'explorer une vaste collection de bières artisanales, de découvrir leurs caractéristiques et de gérer vos favorites.

## 📋 Table des Matières

<!-- <img src="https://media.giphy.com/media/l3vRc1zy8NBqe342I/giphy.gif" width="150" /> -->

- [🚀 Prérequis](#-prérequis)
- [⚙️ Installation](#️-installation)
- [🎮 Lancement du Projet](#-lancement-du-projet)
- [🛠️ Technologies Utilisées](#️-technologies-utilisées)
- [📱 Fonctionnalités](#-fonctionnalités)
- [🔧 Configuration](#-configuration)
- [📝 Notes de Développement](#-notes-de-développement)

## 🚀 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 16.0.0 ou supérieure) 📦
- npm (version 8.0.0 ou supérieure) 🔧
- Git 🌳
<img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="150" />


## ⚙️ Installation


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

4. **Configurez vos variables d'environnement** ⚙️
Ouvrez le fichier `.env` et ajustez les variables selon vos besoins :
```env
VITE_API_URL=https://api.punkapi.com/v2
VITE_APP_TITLE=Zytho
```
<img src="https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" width="150" />


## 🎮 Lancement du Projet

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDlpb3g5MXkyOHR5YjYxN3c0MThib3J6Z2JrMTV3b3hkZnVqcTF5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3jwwe1xIpkDZXQXn3/giphy.gif" width="150" />

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
L'application sera accessible à l'adresse : `http://localhost:4173`

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


