import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';
import AnimatedLink from './AnimatedLink';

const Navbar = () => {

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="portfolioPage/" className="logo">
						<strong>My</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
                            <AnimatedLink name="Home" to="portfolioPage/" />
						</li>

						<li className="nav-list__item">
                            <AnimatedLink name="Projects" to="portfolioPage/projects" />
						</li>
						<li className="nav-list__item">
                            <AnimatedLink name="Contacts" to="portfolioPage/contacts" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
