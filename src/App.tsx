import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './utils/scrollToTop';
import Footer from './components/footer/Footer';
import { Suspense, lazy } from 'react';
import withPageTransition from './utils/withPageTransition';
import Spinner from './components/spiner/spiner';

const Home = withPageTransition(lazy(() => import('./pages/Home')));
const Projects = withPageTransition(lazy(() => import('./pages/Projects')));
const Project = withPageTransition(lazy(() => import('./pages/Project')));
const Contacts = withPageTransition(lazy(() => import('./pages/Contacts')));

const App = () => (
  <>
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  </>
);

export default App;
