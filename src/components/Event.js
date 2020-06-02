import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare, FaRegPlayCircle } from "react-icons/fa";
const Event = ({ date, description, event_tag, image, title, venue }) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
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

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  event_tag: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
  venue: PropTypes.string.isRequired,
};

export default Event;
