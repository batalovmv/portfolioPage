import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import FadeIn from '../utils/FadeIn';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Проекты</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <FadeIn key={index}>
              <Project
                title={project.title}
                img={project.img}
                skills={project.skills}
                description={project.description}
                status={project.status}
                statusLabel={project.statusLabel}
                siteLink={project.siteLink}
                gitHubLink={project.gitHubLink}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
