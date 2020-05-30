import React from "react";
import Title from "./Title";

import services from "../constants/services";

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="we talk about" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { text, title, icon, id } = service;
          return (
            <article className="service" key={id}>
              {/* {icon} */}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
