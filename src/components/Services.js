import React from "react";
import Title from "./Title";
import Slider from "react-slick";
import services from "../constants/services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const settings = {
    dots: true,
  };
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
