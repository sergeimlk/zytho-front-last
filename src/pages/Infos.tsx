import React from 'react';
import '../styles/Infos.css';

const Infos: React.FC = () => {
  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️", description: "J'ai choisi React comme bibliothèque principale pour l'interface utilisateur" },
        { name: "TypeScript", icon: "📘", description: "J'utilise TypeScript pour un code plus robuste et typé" },
        { name: "React Router", icon: "🛣️", description: "J'ai implémenté le routage avec React Router" },
        { name: "CSS Modules", icon: "🎨", description: "J'ai opté pour des styles modulaires pour une meilleure maintenabilité" }
      ]
    },
    {
      category: "API & Intégration",
      items: [
        { name: "Punk API", icon: "🍺", description: "J'utilise cette API publique pour les données de bières" },
        { name: "Axios", icon: "🔄", description: "J'ai choisi Axios pour gérer mes requêtes HTTP" },
        { name: "React Query", icon: "📊", description: "Je gère le cache et les états avec React Query" },
        { name: "TypeScript Types", icon: "📋", description: "J'ai créé des types personnalisés pour les données" }
      ]
    },
    {
      category: "Outils de Développement",
      items: [
        { name: "Vite", icon: "⚡", description: "J'ai configuré Vite pour un développement rapide" },
        { name: "ESLint", icon: "🔍", description: "J'utilise ESLint pour maintenir la qualité du code" },
        { name: "Git", icon: "📚", description: "Je gère les versions avec Git" },
        { name: "npm", icon: "📦", description: "Je gère mes dépendances avec npm" }
      ]
    },
    {
      category: "Design & UI",
      items: [
        { name: "Responsive Design", icon: "📱", description: "J'ai créé une interface adaptative" },
        { name: "Dark Mode", icon: "🌙", description: "J'ai implémenté un thème sombre par défaut" },
        { name: "Custom Components", icon: "🎯", description: "J'ai développé des composants sur mesure" },
        { name: "Animations", icon: "✨", description: "J'ai ajouté des animations fluides" }
      ]
    }
  ];

  const developmentSteps = [
    {
      title: "1. Initialisation du Projet",
      icon: "🚀",
      steps: [
        "J'ai configuré Vite avec React et TypeScript",
        "J'ai structuré mes dossiers de manière logique",
        "J'ai installé les dépendances nécessaires"
      ]
    },
    {
      title: "2. Intégration de l'API",
      icon: "🔌",
      steps: [
        "J'ai configuré Axios pour mes requêtes HTTP",
        "J'ai créé mes types TypeScript pour les données",
        "J'ai mis en place React Query pour le cache",
        "J'ai développé mes hooks personnalisés"
      ]
    },
    {
      title: "3. Architecture & Design",
      icon: "🏗️",
      steps: [
        "J'ai créé mon système de design",
        "J'ai implémenté le routage",
        "J'ai développé les composants de base"
      ]
    }
  ];

  const apiInfo = {
    title: "Mon Intégration avec Punk API",
    description: "J'utilise la Punk API, une API RESTful publique qui me fournit des données détaillées sur les bières craft. Voici comment je l'ai intégrée :",
    features: [
      {
        title: "Mes Requêtes API",
        description: "J'utilise Axios pour effectuer mes requêtes HTTP vers l'API. J'ai implémenté la récupération de la liste des bières, la recherche par nom, et le filtrage par caractéristiques.",
        code: `const fetchBeers = async (page: number) => {
  const response = await axios.get(\`https://api.punkapi.com/v2/beers?page=\${page}&per_page=20\`);
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
      <h1 className="page-title">🍺 Documentation Technique</h1>
      <div className="info-content">
        <div className="info-header">
          <h1>À Propos de Mon Projet</h1>
          <p>Découvrez les technologies et l'architecture que j'ai utilisées pour développer cette application de bières craft.</p>
        </div>

        <section className="tech-stack">
          <h2>Stack Technique</h2>
          <div className="tech-grid">
            {techStack.map((stack, index) => (
              <div key={index} className="tech-category">
                <h3>{stack.category}</h3>
                <div className="tech-items">
                  {stack.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="tech-item">
                      <span className="tech-icon">{item.icon}</span>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="development">
          <h2>Mon Processus de Développement</h2>
          <div className="development-steps">
            {developmentSteps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-header">
                  <span className="step-icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                </div>
                <ul>
                  {step.steps.map((subStep, subIndex) => (
                    <li key={subIndex}>{subStep}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="api-integration">
          <h2>{apiInfo.title}</h2>
          <p className="api-description">{apiInfo.description}</p>
          <div className="api-features">
            {apiInfo.features.map((feature, index) => (
              <div key={index} className="api-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <pre className="code-block">
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
