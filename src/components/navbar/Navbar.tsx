import './style.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#hero" className="logo">
            <span className="logo__accent">MB</span> Portfolio
          </a>

          <ul className="nav-list">
            <li className="nav-list__item">
              <a href="#projects" className="nav-list__link">
                Проекты
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#tech" className="nav-list__link">
                Технологии
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#contacts" className="nav-list__link">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
