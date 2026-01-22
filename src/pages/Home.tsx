import Header from '../components/header/Header';
import FadeIn from '../utils/FadeIn';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Технологии</h2>
              <p>
                Стек не фиксированный: подбираю технологии под задачу и ограничения проекта (в том
                числе с активным использованием нейросетей/AI-инструментов в разработке).
              </p>
            </li>
            <FadeIn>
              <li className="content-list__item">
                <h2 className="title-2">Чаще использую</h2>
                <p>
                  Frontend: TypeScript, React, Vite, Tailwind/CSS, UI-библиотеки по необходимости.
                  <br />
                  Backend: Node.js, SQL (PostgreSQL/MySQL), Docker, JWT.
                </p>
              </li>
            </FadeIn>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
