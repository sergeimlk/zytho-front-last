import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Rechercher...", 
  onSearch,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Trigger search as you type
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        const input = document.querySelector('.search-input') as HTMLInputElement;
        if (input) input.focus();
      }, 100);
    }
  };

  return (
    <form 
      className={`search-bar ${isExpanded ? 'expanded' : ''} ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onBlur={() => {
          if (query.length === 0) {
            setIsExpanded(false);
          }
        }}
      />
      <button 
        type="button" 
        className="search-toggle"
        onClick={toggleExpand}
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
