import React, { useState } from "react";
import ShowMore from "./ShowMore";

const BioCard = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  const titles = props.title.split("|");
  console.log(titles);

  return (
    <div className="bio-card">
      <img
        src={props.picture}
        alt={"Headshot of " + props.name}
        className="bio-card__image"
        width="100px"
        height="auto"
      />
      <h2 className="bio-card__name">{props.name}</h2>
      <h3>{props.title}</h3>
      <div
        className="bio-card__bio"
        dangerouslySetInnerHTML={{
          __html: showMore ? props.bio : props.bio.slice(0, 300),
        }}
      />
      <ShowMore func={toggleText} text="Read" />
    </div>
  );
};

export default BioCard;
