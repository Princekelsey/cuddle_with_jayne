import React from "react";
import Title from "./Title";
import Event from "./Event";
import { Link } from "gatsby";
const Events = ({ events, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {events.map((event) => {
          return <Event event={event} key={event.id} />;
        })}
      </div>
      {showLink && (
        <Link to="/events" className="btn center-btn">
          events
        </Link>
      )}
    </section>
  );
};

export default Events;
