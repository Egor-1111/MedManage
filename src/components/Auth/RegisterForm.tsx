import React, { useState } from 'react';
import { registerUser } from '../../http/AuthService';
import './AuthStyles.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      setMessage('Registration successful! You can now login.');
    } catch (err) {
      setMessage('Registration failed. Try again.');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      {message && <p className="message">{message}</p>}
      <input
        type="email"
        placeholder="Email/Логин"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
