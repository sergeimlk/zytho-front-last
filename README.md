# 🍺 Zytho - Application de Bières Craft

Bienvenue sur mon application de découverte de bières craft ! Cette application web moderne vous permet d'explorer une vaste collection de bières artisanales, de découvrir leurs caractéristiques et de gérer vos favorites.

## 📋 Table des Matières
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

## 🎮 Lancement du Projet

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

## 🔧 Configuration

### Scripts Disponibles

- `npm run dev` - Lance le serveur de développement 🔧
- `npm run build` - Crée la version de production 🏗️
- `npm run preview` - Prévisualise la version de production 👀
- `npm run lint` - Vérifie le code avec ESLint 🔍
- `npm run format` - Formate le code avec Prettier ✨

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

## 📝 Notes de Développement

### Conventions de Code 📚

- Utilisation de TypeScript strict
- Composants fonctionnels avec hooks
- CSS Modules pour le styling
- Tests unitaires pour les composants critiques

### Bonnes Pratiques 🌟

1. **Commits**
   - Messages clairs et descriptifs
   - Une fonctionnalité par commit

2. **Code**
   - Documentation des fonctions complexes
   - Types TypeScript explicites
   - Composants réutilisables

3. **Performance**
   - Lazy loading des images
   - Mise en cache des requêtes API
   - Code splitting automatique

### Résolution des Problèmes Courants 🔧

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
