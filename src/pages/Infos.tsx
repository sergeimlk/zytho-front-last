import React from 'react';
import '../styles/Infos.css';

const Infos: React.FC = () => {
  const openDocumentation = (url: string) => {
    window.open(url, '_blank');
  };

  const techStack = [
    {
      category: "Frontend Core",
      items: [
        { 
          name: "React 18", 
          icon: "⚛️", 
          description: "Bibliothèque UI moderne avec les dernières fonctionnalités comme Suspense et Concurrent Mode",
          docUrl: "https://react.dev/"
        },
        { 
          name: "TypeScript 5", 
          icon: "📘", 
          description: "Typage statique avancé pour un développement plus sûr et productif",
          docUrl: "https://www.typescriptlang.org/docs/"
        },
        { 
          name: "Vite", 
          icon: "⚡", 
          description: "Build tool ultra-rapide avec HMR instantané",
          docUrl: "https://vitejs.dev/"
        }
      ]
    },
    {
      category: "UI/UX & Styling",
      items: [
        { 
          name: "CSS Modules", 
          icon: "🎨", 
          description: "CSS modulaire avec variables personnalisées pour un design cohérent et maintenable",
          docUrl: "https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties"
        },
        { 
          name: "React Icons", 
          icon: "🎯", 
          description: "Bibliothèque d'icônes populaire pour React",
          docUrl: "https://react-icons.github.io/react-icons/"
        },
        { 
          name: "FontAwesome", 
          icon: "✨", 
          description: "Collection d'icônes vectorielles et d'outils de style",
          docUrl: "https://fontawesome.com/"
        }
      ]
    },
    {
      category: "State Management & Routing",
      items: [
        { 
          name: "React Router 6", 
          icon: "🛣️", 
          description: "Routage moderne avec support des Data APIs",
          docUrl: "https://reactrouter.com/"
        },
        { 
          name: "React Context", 
          icon: "🔄", 
          description: "Gestion d'état native React pour les favoris",
          docUrl: "https://react.dev/learn/passing-data-deeply-with-context"
        }
      ]
    },
    {
      category: "Backend & API",
      items: [
        { 
          name: "API REST", 
          icon: "🍺", 
          description: "API personnelle hébergée sur Docker pour les données de bières",
          docUrl: import.meta.env.VITE_API_DOCS_URL
        },
        { 
          name: "Axios", 
          icon: "🔄", 
          description: "Client HTTP moderne avec support TypeScript",
          docUrl: "https://axios-http.com/"
        }
      ]
    },
    {
      category: "Outils de Développement",
      items: [
        { 
          name: "ESLint", 
          icon: "🔍", 
          description: "Linting pour un code propre et cohérent",
          docUrl: "https://eslint.org/"
        },
        { 
          name: "Prettier", 
          icon: "✨", 
          description: "Formatage de code automatique",
          docUrl: "https://prettier.io/"
        },
        { 
          name: "Git", 
          icon: "📦", 
          description: "Contrôle de version et collaboration",
          docUrl: "https://git-scm.com/"
        }
      ]
    }
  ];

  const developmentSteps = [
    {
      title: "1. Initialisation du Projet",
      icon: "🚀",
      steps: [
        "Configuration de Vite avec React et TypeScript",
        "Structuration des dossiers selon les meilleures pratiques",
        "Installation et configuration des dépendances essentielles"
      ]
    },
    {
      title: "2. Conteneurisation avec Docker",
      icon: "🐳",
      steps: [
        "Création d'un Dockerfile multi-stage pour optimiser l'image de production",
        "Configuration de docker-compose pour l'environnement de développement",
        "Mise en place d'un pipeline CI/CD avec GitHub Actions et Docker Hub",
        "Configuration des variables d'environnement pour différents environnements"
      ]
    },
    {
      title: "3. Intégration de l'API",
      icon: "🔌",
      steps: [
        "Configuration d'Axios avec les intercepteurs personnalisés",
        "Création des types TypeScript pour le typage fort",
        "Implémentation du context pour la gestion d'état",
        "Développement des hooks personnalisés pour les requêtes API"
      ]
    },
    {
      title: "4. Architecture & Design",
      icon: "🏗️",
      steps: [
        "Implémentation du système de design moderne",
        "Configuration du routage avec React Router 6",
        "Création des composants réutilisables",
        "Optimisation des performances avec React.memo et useMemo"
      ]
    }
  ];

  const dockerInfo = {
    title: "Infrastructure Docker",
    description: "J'ai utilisé Docker pour containeriser l'application et assurer une cohérence entre les environnements de développement et de production :",
    features: [
      {
        title: "Multi-stage Build",
        description: "J'utilise un Dockerfile multi-stage pour optimiser la taille de l'image finale. La première étape compile l'application, tandis que la seconde ne contient que les fichiers nécessaires à la production.",
        code: `# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
      },
      {
        title: "Configuration Docker Compose",
        description: "Le fichier docker-compose.yml facilite le développement local en orchestrant les services frontend et backend.",
        code: `version: '3.8'
services:
  frontend:
    build:
      context: .
      target: development
    volumes:
      - ./src:/app/src
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://localhost:3000`
      },
      {
        title: "Déploiement Continu",
        description: "L'intégration avec GitHub Actions permet de construire et pousser automatiquement l'image Docker vers Docker Hub à chaque push sur la branche principale.",
        code: `name: Deploy to Docker Hub
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build and push
        run: |
          docker build -t user/zytho-front .
          docker push user/zytho-front`
      }
    ]
  };

  const apiInfo = {
    title: "Mon Intégration avec mon API Personnelle",
    description: "J'utilise mon API personnelle hébergée sur Docker pour les données de bières. Voici comment je l'ai intégrée :",
    features: [
      {
        title: "Mes Requêtes API",
        description: "J'utilise Axios pour effectuer mes requêtes HTTP vers mon API. J'ai implémenté la récupération de la liste des bières, la recherche par nom, et le filtrage par caractéristiques.",
        code: `const fetchBeers = async (page: number) => {
  const response = await axios.get(\`${import.meta.env.VITE_API_URL}/beers?page=\${page}&limit=20}\`);
  return response.data;
};`
      },
      {
        title: "Ma Gestion des Données",
        description: "J'ai choisi React Query pour gérer le cache des données et les états de chargement. Cela me permet d'offrir une expérience utilisateur fluide avec des temps de chargement optimisés.",
        code: `const { data, isLoading, error } = useQuery(['beers', page], 
  () => fetchBeers(page),
  { keepPreviousData: true }
);`
      },
      {
        title: "Mes Types TypeScript",
        description: "J'ai créé des types TypeScript pour assurer la sécurité du typage et améliorer mon expérience de développement.",
        code: `interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  // ... autres propriétés
}`
      }
    ]
  };

  return (
    <div className="info-container">
      <h1 className="page-title">🍺 Documentation</h1>
      <div className="info-content">
        <div className="info-header">
          <h1>À Propos de Mon Projet</h1>
          <p>Découvrez l'architecture et les technologies utilisées dans cette application de bières moderne.</p>
        </div>

        <section className="tech-stack">
          <h2>Stack Technique</h2>
          <div className="tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="tech-category">
                <h3>{stack.category}</h3>
                <div className="tech-items">
                  {stack.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="tech-item"
                      onClick={() => openDocumentation(item.docUrl)}
                    >
                      <div className="tech-item-header">
                        <span className="tech-icon">{item.icon}</span>
                        <h4>{item.name}</h4>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="development-process">
          <h2>Processus de Développement</h2>
          <div className="development-steps">
            {developmentSteps.map((step, index) => (
              <div key={index} className="dev-step">
                <div className="step-header">
                  <span className="step-icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                </div>
                <ul>
                  {step.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="docker-infrastructure">
          <h2>Infrastructure Docker</h2>
          <div className="docker-info">
            <p className="docker-description">{dockerInfo.description}</p>
            <div className="docker-features">
              {dockerInfo.features.map((feature, index) => (
                <div key={index} className="docker-feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <pre>
                    <code>{feature.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="api-integration">
          <h2>Intégration API</h2>
          <p className="api-description">{apiInfo.description}</p>
          <div className="api-features">
            {apiInfo.features.map((feature, index) => (
              <div key={index} className="api-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <pre>
                  <code>{feature.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section className="project-features">
          <h2>✨ Fonctionnalités Principales ✨</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🍺</span>
              <h3>Catalogue de Bières</h3>
              <p>Explorez notre sélection de bières artisanales avec filtres avancés</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏭</span>
              <h3>Brasseries Partenaires</h3>
              <p>Découvrez les meilleures brasseries artisanales du Pays Basque</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">❤️</span>
              <h3>Système de Favoris</h3>
              <p>Gardez une trace de vos bières préférées</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Design Responsive</h3>
              <p>Une expérience optimale sur tous les appareils</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Infos;
