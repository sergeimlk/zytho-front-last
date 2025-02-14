import React, { useState } from 'react';

export function Btn({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>Ajouter un élément</button>
    );
}

export const Todos: React.FC = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Apprendre React' },
        { id: 2, text: 'Créer une application' },
    ]);

    const addTodo = () => {
        const newTodo = { id: todos.length + 1, text: `Nouvelle tâche ${todos.length + 1}` };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <Btn onClick={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};
