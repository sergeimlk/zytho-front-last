import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implémentez la logique d'inscription ici
    console.log('Register:', formData);
  };

  const handleGoogleRegister = () => {
    // Implémentez la logique d'inscription avec Google ici
    console.log('Google register clicked');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-header">
          <h1>Créer un compte</h1>
          <p>Rejoignez notre communauté de passionnés de bière</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-button">
            S'inscrire
          </button>

          <div className="divider">
            <span>ou</span>
          </div>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleRegister}
          >
            <FaGoogle />
            <span>S'inscrire avec Google</span>
          </button>
        </form>

        <div className="login-link">
          Déjà un compte ? <a href="/login">Se connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
