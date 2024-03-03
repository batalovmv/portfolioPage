import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop"
import Footer from './components/footer/Footer';



const App = () => (

  <>
        <div className="App">
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            <Footer />
        </div>

  </>

);



export default App;

