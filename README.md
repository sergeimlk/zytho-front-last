# 🍺 Zytho - Application de Bières Craft

![Beer Cheers](https://media.giphy.com/media/3o7TKUZfJKUKuSWTZe/giphy.gif)

Bienvenue sur mon application de découverte de bières craft ! Cette application web moderne vous permet d'explorer une vaste collection de bières artisanales, de découvrir leurs caractéristiques et de gérer vos favorites.

## 📋 Table des Matières

![Table Flip](https://media.giphy.com/media/l3vRc1zy8NBqe342I/giphy.gif)

- [🚀 Prérequis](#-prérequis)
- [⚙️ Installation](#️-installation)
- [🎮 Lancement du Projet](#-lancement-du-projet)
- [🛠️ Technologies Utilisées](#️-technologies-utilisées)
- [📱 Fonctionnalités](#-fonctionnalités)
- [🔧 Configuration](#-configuration)
- [📝 Notes de Développement](#-notes-de-développement)

## 🚀 Prérequis

![Mind Blown](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 16.0.0 ou supérieure) 📦
- npm (version 8.0.0 ou supérieure) 🔧
- Git 🌳

## ⚙️ Installation

![Installing](https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif)

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

![Launch](https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif)

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

![Tech](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

- **React** ⚛️ - Bibliothèque UI
- **TypeScript** 📘 - Typage statique
- **Vite** ⚡ - Build tool
- **React Router** 🛣️ - Navigation
- **React Query** 📊 - Gestion des états et du cache
- **Axios** 🔄 - Client HTTP
- **CSS Modules** 🎨 - Styling

## 📱 Fonctionnalités

![Features](https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif)

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

![Config](https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif)

### Scripts Disponibles

- `npm run dev` - Lance le serveur de développement 🔧
- `npm run build` - Crée la version de production 🏗️
- `npm run preview` - Prévisualise la version de production 👀
- `npm run lint` - Vérifie le code avec ESLint 🔍
- `npm run format` - Formate le code avec Prettier ✨

### Structure des Dossiers 📁

![Folders](https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif)

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

![Coding](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

### Conventions de Code 📚

- Utilisation de TypeScript strict
- Composants fonctionnels avec hooks
- CSS Modules pour le styling
- Tests unitaires pour les composants critiques

### Bonnes Pratiques 🌟

![Best Practices](https://media.giphy.com/media/l2Sq29cFXoF80ADlK/giphy.gif)

1. **Commits**
   - Messages clairs et descriptifs
   - Une fonctionnalité par commit

2. **Code**
   - Documentation des fonctions complexes
   - Types TypeScript explicites
   - Composants réutilisables

### Résolution des Problèmes Courants 🔧

![Debugging](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

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

![Team Work](https://media.giphy.com/media/Pb9MeNn9YWN2s/giphy.gif)

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📫 Contact

![Contact](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

Pour toute question ou suggestion, n'hésitez pas à me contacter :
- Email 📧 : sergei.mlk@hotmail.com
- LinkedIn 💼 : [Votre Profil](https://github.com/sergeimlk)

## 📄 Licence

![School](https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif)

Ce projet est Un brief effectué pour la formation, CDA chez Simplon

---

⭐️ Si vous aimez ce projet, n'hésitez pas à lui mettre une étoile sur GitHub !

![Thank You](https://media.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif)
