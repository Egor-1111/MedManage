import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../http/AuthService';
import './AuthStyles.css';

const LoginForm = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext не был предоставлен. Проверьте обёртку AuthProvider.');
  }

  const { login } = authContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      login(response.data.token); // Вызываем login из AuthContext
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      {error && <p className="error">{error}</p>}
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
      <button type="submit">войти</button>
    </form>
  );
};

export default LoginForm;
