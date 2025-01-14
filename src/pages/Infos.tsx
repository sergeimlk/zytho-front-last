import React from 'react';
import '../styles/Infos.css';

const Infos: React.FC = () => {
  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️", description: "Bibliothèque JavaScript pour construire l'interface utilisateur" },
        { name: "TypeScript", icon: "📘", description: "Superset JavaScript apportant le typage statique" },
        { name: "React Router", icon: "🛣️", description: "Gestion du routage de l'application" },
        { name: "CSS Modules", icon: "🎨", description: "Styles modulaires et scoped" }
      ]
    },
    {
      category: "Outils de Développement",
      items: [
        { name: "Vite", icon: "⚡", description: "Bundler ultra-rapide pour le développement moderne" },
        { name: "ESLint", icon: "🔍", description: "Linter pour maintenir la qualité du code" },
        { name: "Git", icon: "📚", description: "Gestion de versions du code" },
        { name: "npm", icon: "📦", description: "Gestionnaire de paquets Node.js" }
      ]
    },
    {
      category: "Design & UI",
      items: [
        { name: "Responsive Design", icon: "📱", description: "Adaptation à tous les écrans" },
        { name: "Dark Mode", icon: "🌙", description: "Interface sombre par défaut" },
        { name: "Custom Components", icon: "🎯", description: "Composants sur mesure" },
        { name: "Animations", icon: "✨", description: "Transitions et animations fluides" }
      ]
    }
  ];

  const developmentSteps = [
    {
      title: "1. Initialisation du Projet",
      icon: "🚀",
      steps: [
        "Configuration de Vite avec React et TypeScript",
        "Mise en place de la structure des dossiers",
        "Installation des dépendances essentielles"
      ]
    },
    {
      title: "2. Architecture & Design",
      icon: "🏗️",
      steps: [
        "Création du système de design",
        "Mise en place du routage",
        "Développement des composants de base"
      ]
    },
    {
      title: "3. Développement",
      icon: "⚙️",
      steps: [
        "Implémentation du catalogue de bières",
        "Création de la page des brasseries",
        "Système de favoris",
        "Navigation responsive"
      ]
    },
    {
      title: "4. Finitions",
      icon: "🎮",
      steps: [
        "Optimisation des performances",
        "Tests et débogage",
        "Améliorations UX/UI",
        "Documentation du code"
      ]
    }
  ];

  return (
    <div className="info-container">
      <h1 className="page-title">🍺 Documentation Technique</h1>
      <div className="info-content">
        <header className="info-header">
          <h1>🍺 Zytho</h1>
          <p>Une application moderne pour les amateurs de bières artisanales</p>
        </header>

        <section className="tech-stack">
          <h2>🛠️ Stack Technologique 🛠️</h2>
          <div className="tech-categories">
            {techStack.map((category, index) => (
              <div key={index} className="tech-category">
                <h3>{category.category}</h3>
                <div className="tech-items">
                  {category.items.map((item, itemIndex) => (
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

        <section className="development-process">
          <h2>📝 Processus de Développement 📝</h2>
          <div className="development-steps">
            {developmentSteps.map((phase, index) => (
              <div key={index} className="development-phase">
                <div className="phase-header">
                  <span className="phase-icon">{phase.icon}</span>
                  <h3>{phase.title}</h3>
                </div>
                <ul className="phase-steps">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
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
