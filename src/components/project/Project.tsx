import { useSpring, animated } from 'react-spring';
import './style.css';
import { useState } from 'react';

type ProjectProp = {
  title: string;
  img: string;
  skills: string;
  description?: string;
  status?: string;
  statusLabel?: string;
  siteLink?: string;
  gitHubLink?: string;
};

const Project = ({
  title,
  img,
  skills,
  description,
  status,
  statusLabel,
  siteLink,
  gitHubLink,
}: ProjectProp) => {
  const [hovered, setHovered] = useState(false);
  const springStyle = useSpring({
    transform: hovered ? 'translateY(-6px)' : 'translateY(0px)',
    boxShadow: hovered
      ? '0 0 30px rgba(124, 58, 237, 0.2)'
      : '0 0 0px rgba(124, 58, 237, 0)',
  });

  const skillTags = skills.split(',').map((s) => s.trim());

  return (
    <animated.div
      className="project-card"
      style={springStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card__media">
        {status === 'frozen' && (
          <span className="project-card__badge project-card__badge--frozen">
            {statusLabel || 'Заморожен'}
          </span>
        )}
        <img src={img} alt={title} className="project-card__img" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>

        {description && (
          <p className="project-card__desc">{description}</p>
        )}

        <div className="project-card__tags">
          {skillTags.slice(0, 6).map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
          {skillTags.length > 6 && (
            <span className="project-card__tag project-card__tag--more">
              +{skillTags.length - 6}
            </span>
          )}
        </div>

        <div className="project-card__links">
          {siteLink && siteLink !== '#' && (
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--sm"
            >
              Сайт
            </a>
          )}
          {gitHubLink && (
            <a
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
              className="btn-outline btn-outline--sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Project;
