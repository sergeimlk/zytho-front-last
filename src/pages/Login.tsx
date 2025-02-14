import React, { useState } from 'react';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implémentez la logique de connexion par email ici
    console.log('Email login:', email, password);
  };

  const handleGoogleLogin = () => {
    // Implémentez la logique de connexion Google ici
    console.log('Google login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Bienvenue</h1>
          <p>Connectez-vous pour accéder à votre compte</p>
        </div>

        <form onSubmit={handleEmailLogin} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="/reset-password">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="login-button">
            Se connecter
          </button>

          <div className="divider">
            <span>ou</span>
          </div>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
          >
            <FaGoogle />
            <span>Continuer avec Google</span>
          </button>
        </form>

        <div className="signup-link">
          Pas encore de compte ? <a href="/signup">S'inscrire</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
