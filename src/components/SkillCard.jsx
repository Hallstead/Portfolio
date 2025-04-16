import React from "react";
import { Link } from "react-router-dom";

const SkillCard = ({ name }) => {
  return (
    <Link
      to={`/projects?tech=${encodeURIComponent(name)}`}
      className="skills-gallery__item"
    >
      {name}
    </Link>
  );
};

export default SkillCard;
