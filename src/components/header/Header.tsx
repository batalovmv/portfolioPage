import "./style.css";
import Background from "./background";
const Header = () => {
   
    
    return (
		<header className="header">
            
            <Background/>
			<div className="header__wrapper">
                
				<h1 className="header__title">
					<strong>
						Привет, мое имя <em>Михаил</em>
					</strong>
					<br />я Frontend разработчик
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#!" className="btn">
					Download CV
				</a>
			</div>
           
		</header>
	);
}

export default Header;