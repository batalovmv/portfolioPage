import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "../helpers/projectsList"
import FadeIn from "../utils/FadeIn";
interface Project {
  title: string;
  imgBig: string;
  skills: string;
  gitHubLink?: string;
  siteLink?:string;
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
<FadeIn>
					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>
                    
                    <div className="project-buttons">
                        
                   
{project.siteLink&&(
                                <a href={project.siteLink} target="_blank"  className="btn btn-link">
                            Перейти на сайт
                        </a>   
)}
					{project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink}/>
                            )} </div></FadeIn>
				</div>
			</div>
		</main>
	);
}

export default Project;