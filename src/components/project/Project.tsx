import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './style.css';
import { useState } from 'react';
type ProjectProp={
    title:string;
    img:any;
    index:number
}
const Project = ({ title, img, index }: ProjectProp) => {
    // Анимация наведения
    const [hovered, setHovered] = useState(false);
    const scale = useSpring({
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
    });

    // Анимация клика
    const [clicked, setClicked] = useState(false);
    const click = useSpring({
        boxShadow: clicked ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : '0px 0px 0px rgba(0, 0, 0, 0)',
    });

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200);
    };

    return (
        <NavLink
            className="project-card"
            to={`/project/${index}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <animated.div
                className="project"
                style={{
                    ...scale,
                    ...click,
                }}
            >
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </animated.div>
        </NavLink>
    );
};

export default Project;
