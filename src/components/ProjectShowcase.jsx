import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('tech') || 'All';

  const [filter, setFilter] = useState(initialFilter);

  const allProjects = [
    {
      title: 'Project One',
      description: 'Built with React and Sass.',
      tech: ['React', 'Sass'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'Another example project with a different stack.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://your-other-project.com',
      githubLink: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Two',
      description: 'Another example project with a different stack.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://your-other-project.com',
      githubLink: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Two',
      description: 'Another example project with a different stack.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://your-other-project.com',
      githubLink: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Two',
      description: 'Another example project with a different stack.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://your-other-project.com',
      githubLink: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Two',
      description: 'Another example project with a different stack.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://your-other-project.com',
      githubLink: 'https://github.com/yourusername/project-two',
    },
    // Add more projects
  ];

  const techOptions = ['All', ...new Set(allProjects.flatMap((p) => p.tech))];

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter((project) => project.tech.includes(filter));

  // Update filter if URL param changes
  useEffect(() => {
    const techParam = searchParams.get('tech');
    if (techParam && techParam !== filter) {
      setFilter(techParam);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const selectedTech = e.target.value;
    setFilter(selectedTech);
    setSearchParams(selectedTech === 'All' ? {} : { tech: selectedTech });
  };

  return (
    <section className="project-showcase">
      <h2 className="project-showcase__title">Projects</h2>

      <label className="project-showcase__filter-label" htmlFor="tech-filter">
        Filter by tech:
      </label>
      <select
        id="tech-filter"
        value={filter}
        onChange={handleChange}
        className="project-showcase__filter-dropdown"
      >
        {techOptions.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>

      <div className="project-showcase__grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
