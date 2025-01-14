// MasterclassJB2.tsx
// 🎓 Masterclass: React Router avec une Todo List
// Niveau: Débutant
// Objectif: Comprendre le routage avec React Router en créant une Todo List interactive

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom';

// 1️⃣ Définition de nos types
interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// 2️⃣ Données exemple
const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Apprendre React Router",
    description: "Comprendre les bases du routage avec React Router v6",
    completed: false
  },
  {
    id: 2,
    title: "Créer des composants",
    description: "Pratiquer la création de composants React réutilisables",
    completed: true
  },
  {
    id: 3,
    title: "Maîtriser TypeScript",
    description: "Apprendre à utiliser TypeScript avec React",
    completed: false
  }
];

// 3️⃣ Composant pour la liste des todos
const TodoList: React.FC = () => {
  return (
    <div className="todo-list">
      <h1>Mes Tâches</h1>
      <div className="todos">
        {initialTodos.map(todo => (
          // 🔑 NavLink pour la navigation
          <NavLink
            to={`/todo/${todo.id}`}
            key={todo.id}
            className={({ isActive }) => 
              `todo-item ${isActive ? 'active' : ''} ${todo.completed ? 'completed' : ''}`
            }
          >
            <h3>{todo.title}</h3>
            <span className="status">
              {todo.completed ? '✅' : '⏳'}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

// 4️⃣ Composant pour le détail d'une todo
const TodoDetail: React.FC = () => {
  // 🎯 Utilisation de useParams pour récupérer l'ID depuis l'URL
  const { id } = useParams<{ id: string }>();
  const todo = initialTodos.find(t => t.id === Number(id));

  if (!todo) {
    return <div className="todo-detail">Tâche non trouvée</div>;
  }

  return (
    <div className="todo-detail">
      <h2>{todo.title}</h2>
      <p className="description">{todo.description}</p>
      <p className="status">
        Statut: {todo.completed ? 'Terminée ✅' : 'En cours ⏳'}
      </p>
      <NavLink to="/" className="back-button">
        ← Retour à la liste
      </NavLink>
    </div>
  );
};

// 5️⃣ Composant principal avec le routage
const MasterclassJB2: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="todo-app">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MasterclassJB2;
