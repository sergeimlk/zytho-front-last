import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
  label?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Rechercher une bière...", 
  onSearch,
  className = "",
  label = "Rechercher dans le catalogue"
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const searchId = useRef(`search-${Math.random().toString(36).substr(2, 9)}`).current;
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isExpanded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      inputRef.current?.focus();
    }
  };

  return (
    <form 
      ref={formRef}
      className={`search-bar ${isExpanded ? 'expanded' : ''} ${className}`}
      onSubmit={handleSubmit}
      role="search"
      aria-label={label}
    >
      <div className="search-wrapper">
        <label htmlFor={searchId} className="visually-hidden">
          {label}
        </label>
        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            id={searchId}
            type="search"
            className="search-input"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            aria-expanded={isExpanded}
            aria-controls="search-results"
            aria-describedby="search-shortcut"
            onBlur={(e) => {
              if (!formRef.current?.contains(e.relatedTarget) && query.length === 0) {
                setIsExpanded(false);
              }
            }}
          />
          <span id="search-shortcut" className="visually-hidden">
            Appuyez sur Ctrl + K pour rechercher
          </span>
        </div>
        <button 
          type="submit" 
          className="search-toggle"
          onClick={toggleExpand}
          aria-label={isExpanded ? "Fermer la recherche" : "Ouvrir la recherche"}
          title={`${isExpanded ? "Fermer" : "Ouvrir"} la recherche (Ctrl + K)`}
        >
          <FaSearch aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
