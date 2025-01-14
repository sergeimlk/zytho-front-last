import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implémentez la logique de réinitialisation du mot de passe ici
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="reset-password-container">
        <div className="reset-password-box">
          <div className="reset-password-header">
            <h1>Email envoyé !</h1>
            <p>
              Si un compte existe avec l'adresse {email}, vous recevrez un email
              avec les instructions pour réinitialiser votre mot de passe.
            </p>
          </div>
          <button
            className="back-to-login"
            onClick={() => window.location.href = '/login'}
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <div className="reset-password-header">
          <h1>Mot de passe oublié ?</h1>
          <p>
            Entrez votre adresse email et nous vous enverrons un lien pour
            réinitialiser votre mot de passe.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reset-password-form">
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

          <button type="submit" className="reset-button">
            Envoyer les instructions
          </button>

          <div className="login-link">
            <a href="/login">Retour à la connexion</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
