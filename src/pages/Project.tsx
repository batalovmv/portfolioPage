import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "../helpers/projectsList"
interface Project {
  title: string;
  imgBig: string;
  skills: string;
  gitHubLink?: string;
}

const Project = () => {
    const { id } = useParams<{ id: string }>();
    const index = id ? parseInt(id, 10) : NaN;
    const project = !isNaN(index) ? projects[index] : null;

    if (!project) {
        return <div>Проект не найден</div>;
    }

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>

					{project.gitHubLink && (
                        <BtnGitHub link="http://5.181.108.207:81/" />
					)}
				</div>
			</div>
		</main>
	);
}

export default Project;