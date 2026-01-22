import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';
import AnimatedLink from './AnimatedLink';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <AnimatedLink name="Home" to="/" />
            </li>

            <li className="nav-list__item">
              <AnimatedLink name="Projects" to="/projects" />
            </li>
            <li className="nav-list__item">
              <AnimatedLink name="Contacts" to="/contacts" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
