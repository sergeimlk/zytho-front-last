# Masterclass React - Les Fondamentaux

## Table des matières
1. [useState - Gestion de l'état](#useState)
2. [onClick - Gestion des événements](#onClick)
3. [fetch - Appels API](#fetch)
4. [useEffect - Effets de bord](#useEffect)

## useState

Le Hook `useState` gère l'état local d'un composant.

### Syntaxe
```jsx
const [state, setState] = useState(initialValue);
```

### Exemple
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

### Points clés
- État initial : valeur ou fonction
- setState : accepte valeur ou fonction
- React optimise les mises à jour d'état

## onClick

Gestion des événements via props spéciales.

### Syntaxe
```jsx
<element onClick={handleClick}>Cliquez-moi</element>
```

### Exemples
```jsx
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

function ItemList() {
  const handleItemClick = (id) => console.log(`Item ${id} clicked`);
  return (
    <ul>
      <li onClick={() => handleItemClick(1)}>Item 1</li>
      <li onClick={() => handleItemClick(2)}>Item 2</li>
    </ul>
  );
}
```

## fetch

API native pour requêtes HTTP.

### Syntaxe
```jsx
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Exemple avec useState
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.example.com/users');
      setUsers(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchUsers}>Charger les utilisateurs</button>
      {isLoading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
```

## useEffect

Gère les effets de bord dans les composants.

### Syntaxe
```jsx
useEffect(() => {
  // Effet
  return () => {/* Cleanup */};
}, [dependencies]);
```

### Cas d'utilisation
```jsx
// Chaque rendu
useEffect(() => {
  console.log('Rendu');
});

// Montage uniquement
useEffect(() => {
  console.log('Monté');
}, []);

// Dépendances spécifiques
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      setUser(await response.json());
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      {user ? <h1>{user.name}</h1> : <p>Chargement...</p>}
    </div>
  );
}
```

### Exemple complet
```jsx
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://api.example.com/todos');
      setTodos(await response.json());
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      const response = await fetch('https://api.example.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo }),
      });
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo('');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://api.example.com/todos/${id}`, { method: 'DELETE' });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  if (isLoading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

### Bonnes pratiques
1. Spécifier les dépendances dans useEffect
2. Utiliser les fonctions de cleanup
3. Éviter les mises à jour d'état inutiles
4. Gérer les erreurs dans les appels API
5. Utiliser des états de chargement pour l'UX
