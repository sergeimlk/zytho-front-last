# Zytho Design System

## 🎨 Couleurs

### Couleurs Principales
- **Primary**: `#F2994A` (Orange)
- **Secondary**: `#D23B3B` (Rouge)
- **Gradient Principal**: `linear-gradient(90deg, #D23B3B 0%, #F2994A 100%)`

### Couleurs de Fond
- **Background Dark**: `#1A1A1A` (Fond principal)
- **Card Background**: `#2A2A2A` (Fond des cartes)

### Couleurs de Texte
- **Text Light**: `#FFFFFF` (Texte principal)
- **Text Gray**: `#9CA3AF` (Texte secondaire)

## 📝 Typographie

### Police Principale
- **Famille**: `Montserrat`
- **Weights**: 
  - Regular (400)
  - Semi-bold (600)
  - Bold (700)

### Hiérarchie de Texte
- **H1**: 2.5rem (40px)
  - Utilisé pour les titres principaux
  - Font-weight: 700
- **H2**: 2rem (32px)
  - Utilisé pour les sous-titres
  - Font-weight: 600
- **H3**: 1.5rem (24px)
  - Utilisé pour les titres de cartes
  - Font-weight: 600
- **Body**: 1rem (16px)
  - Texte courant
  - Font-weight: 400
- **Small**: 0.875rem (14px)
  - Texte secondaire
  - Font-weight: 400

## 🎯 Composants

### Boutons
```css
.button {
  background: linear-gradient(90deg, #D23B3B 0%, #F2994A 100%);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
```

### Cartes
```css
.card {
  background-color: #2A2A2A;
  border-radius: 0.5rem;
  padding: 1rem;
  transition: transform 0.2s;
}
```

### Navigation
```css
.navbar {
  background-color: #2A2A2A;
  padding: 1rem 0;
}
```

### Section Héro
```css
.hero-section {
  background: linear-gradient(90deg, #D23B3B 0%, #F2994A 100%);
  padding: 4rem 0;
  border-radius: 1rem;
  margin: 2rem 0;
}
```

## 📱 Grille et Responsive

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### Grille
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
```

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations et Transitions

### Hover States
- **Boutons**: Opacité réduite à 0.9
- **Cartes**: Translation Y de -5px

### Transitions
- Toutes les transitions: 0.2s
- Timing function: ease-in-out

## 🖼️ Modal
```css
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #2A2A2A;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 90%;
  width: 600px;
}
```

## 🎯 Espacement

### Système d'Espacement
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 4rem (64px)

## 🔒 Accessibilité
- Contraste minimum de 4.5:1 pour le texte
- Focus visible sur tous les éléments interactifs
- Taille de police minimum de 14px
- Espacement suffisant pour les zones cliquables (minimum 44x44px)
