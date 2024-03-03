import { NavLink } from 'react-router-dom';
import './style.css';
type ProjectProp={
    title:string;
    img:any;
    index:number
}
const Project = ({ title, img, index }: ProjectProp) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Project;
