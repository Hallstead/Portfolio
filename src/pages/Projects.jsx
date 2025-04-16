import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const tech = searchParams.get('tech'); // e.g. ?tech=React

  return <ProjectShowcase filterTech={tech} />;
};

export default Projects;
