import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assets/testimony.jpg";

const query = graphql`
  {
    allStrapiTestimonies(sort: { fields: strapiId, order: DESC }) {
      nodes {
        id
        text
      }
    }
  }
`;

const Testmoines = () => {
  const data = useStaticQuery(query);

  const {
    allStrapiTestimonies: { nodes: testimonies },
  } = data;

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    //lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    className: "center",

    // cssEase: "linear",
  };

  return (
    <section className="section testimonies">
      <Title title="testimonies" />
      <div style={{ paddingRight: "40px", paddingLeft: "40px" }}>
        <Slider {...settings}>
          {testimonies.map((testimony) => {
            const { id, text } = testimony;
            return (
              <div key={id}>
                <div style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // marginBottom: "15px",
                    }}
                  >
                    <img src={avatar} alt="testimony" className="img-circle" />
                  </div>
                  <p style={{ textAlign: "center", fontSize: "24px" }}>
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testmoines;
