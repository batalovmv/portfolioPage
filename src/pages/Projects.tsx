import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import FadeIn from '../utils/FadeIn';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <FadeIn>
                <Project key={index} title={project.title} img={project.img} index={index} />
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
