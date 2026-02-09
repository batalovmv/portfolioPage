import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/header/Header';
import ProjectsSection from './pages/Projects';
import TechStack from './pages/TechStack';
import Contacts from './pages/Contacts';

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <ProjectsSection />
    <TechStack />
    <Contacts />
    <Footer />
  </div>
);

export default App;
