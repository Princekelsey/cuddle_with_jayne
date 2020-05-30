import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare, FaRegPlayCircle } from "react-icons/fa";
const Event = ({ event }) => {
  const { date, description, event_tag, image, title, venue } = event;
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="job-date">{date}</p>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {event_tag.map((tag) => {
            return <span key={tag.id}>{tag.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={venue}>
            <FaRegPlayCircle className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

Event.propTypes = {};

export default Event;
