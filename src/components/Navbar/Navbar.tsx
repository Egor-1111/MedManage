import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './NavbarStyles.css';

const Navbar = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      MedManage
      </Link>
      <div className="nav-links">
        {!auth?.isAuthenticated ? (
          <>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
          </>
        ) : (
          <button onClick={auth.logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
