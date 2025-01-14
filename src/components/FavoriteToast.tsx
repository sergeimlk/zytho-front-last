import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/Beers.css';

interface FavoriteToastProps {
  message: string;
  onClose: () => void;
}

const FavoriteToast: React.FC<FavoriteToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="favorite-toast">
      <FaHeart className="heart-icon" />
      <span>{message}</span>
    </div>
  );
};

export default FavoriteToast;
