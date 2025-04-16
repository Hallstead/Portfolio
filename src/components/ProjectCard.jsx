import React from 'react';

const ProjectCard = ({ title, description, tech, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <p className="project-card__tech">
        <strong>Tech:</strong> {tech.join(', ')}
      </p>
      <div className="project-card__links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
