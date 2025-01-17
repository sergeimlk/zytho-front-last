import React from 'react';
import '../styles/Infos.css';

const Infos: React.FC = () => {
  const openDocumentation = (url: string) => {
    window.open(url, '_blank');
  };

  const techStack = [
    {
      category: "Frontend",
      items: [
        { 
          name: "React", 
          icon: "⚛️", 
          description: "J'ai choisi React comme bibliothèque principale pour l'interface utilisateur",
          docUrl: "https://react.dev/"
        },
        { 
          name: "TypeScript", 
          icon: "📘", 
          description: "J'utilise TypeScript pour un code plus robuste et typé",
          docUrl: "https://www.typescriptlang.org/docs/"
        },
        { 
          name: "React Router", 
          icon: "🛣️", 
          description: "J'ai implémenté le routage avec React Router",
          docUrl: "https://reactrouter.com/"
        },
        { 
          name: "CSS Modules", 
          icon: "🎨", 
          description: "J'ai opté pour des styles modulaires pour une meilleure maintenabilité",
          docUrl: "https://github.com/css-modules/css-modules"
        }
      ]
    },
    {
      category: "API & Intégration",
      items: [
        { 
          name: "API Personnelle", 
          icon: "🍺", 
          description: "J'utilise mon API personnelle hébergée sur Docker pour les données de bières",
          docUrl: import.meta.env.VITE_API_DOCS_URL
        },
        { 
          name: "Axios", 
          icon: "🔄", 
          description: "J'ai choisi Axios pour gérer mes requêtes HTTP",
          docUrl: "https://axios-http.com/docs/intro"
        },
        { 
          name: "React Query", 
          icon: "📊", 
          description: "Je gère le cache et les états avec React Query",
          docUrl: "https://tanstack.com/query/latest"
        },
        { 
          name: "TypeScript Types", 
          icon: "📋", 
          description: "J'ai créé des types personnalisés pour les données",
          docUrl: "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html"
        }
      ]
    },
    {
      category: "Outils de Développement",
      items: [
        { 
          name: "Vite", 
          icon: "⚡", 
          description: "J'ai configuré Vite pour un développement rapide",
          docUrl: "https://vitejs.dev/guide/"
        },
        { 
          name: "ESLint", 
          icon: "🔍", 
          description: "J'utilise ESLint pour maintenir la qualité du code",
          docUrl: "https://eslint.org/docs/latest/"
        },
        { 
          name: "Git", 
          icon: "📚", 
          description: "Je gère les versions avec Git",
          docUrl: "https://git-scm.com/doc"
        },
        { 
          name: "npm", 
          icon: "📦", 
          description: "Je gère mes dépendances avec npm",
          docUrl: "https://docs.npmjs.com/"
        }
      ]
    },
    {
      category: "Design & UI",
      items: [
        { 
          name: "Responsive Design", 
          icon: "📱", 
          description: "J'ai créé une interface adaptative",
          docUrl: "https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design"
        },
        { 
          name: "Dark Mode", 
          icon: "🌙", 
          description: "J'ai implémenté un thème sombre par défaut",
          docUrl: "https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme"
        },
        { 
          name: "Custom Components", 
          icon: "🎯", 
          description: "J'ai développé des composants sur mesure",
          docUrl: "https://react.dev/learn/your-first-component"
        },
        { 
          name: "Animations", 
          icon: "✨", 
          description: "J'ai ajouté des animations fluides",
          docUrl: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animations"
        }
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
          <p>Découvrez les technologies et l'architecture que j'ai utilisées pour développer cette application de bières.</p>
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
                      style={{ cursor: 'pointer' }}
                    >
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

        <section className="api-section">
          <h2>{apiInfo.title}</h2>
          <p>{apiInfo.description}</p>
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
