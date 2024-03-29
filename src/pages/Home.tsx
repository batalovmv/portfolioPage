import Header from '../components/header/Header'
import FadeIn from '../utils/FadeIn';

const Home = () => {
    
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Redux,
								HTML, CSS, NPM, Vite, MaterialUI, AntD, StyledComponents
							</p>
						</li>
                        <FadeIn>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL,jwt-token, Docker</p>
						</li>
                        </FadeIn>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;