import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Col, Card } from "antd";
import Typical from "react-typical";

import SocialLinks from "../constants/socialLinks";

const querry = graphql`
  {
    file(relativePath: { eq: "pic3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(querry);

  const steps = [
    "is a revivalist",
    4000,
    "a life coach",
    4000,
    "a social worker",
    4000,
    "is a human capital development expert",
    4000,
    "is the founder, Women Safe House Initiative and Cuddlewithjayne Foundation",
    4000,
  ];

  return (
    <section className="hero-container ">
      <div className="hero-image">
        <Image fluid={fluid} style={{ width: "100%" }} />
      </div>
      <div className="hero-text">
        <h4 style={{ color: "#fff", marginTop: "15px", marginLeft: "1rem" }}>
          Jane Nnanna{" "}
          <strong style={{ color: "#ed0086" }}>
            <Typical loop={Infinity} wrapper="b" steps={steps} />
          </strong>
        </h4>
        <h3
          style={{
            color: "#fff",
            paddingLeft: "1rem",
            fontSize: "24px",
            paddingTop: "10px",
            textTransform: "none",
          }}
        >
          I'm Jane.
          <br /> I'm hungry for more of Jesus, passionate about life and you!{" "}
          <br /> <br />
          Founder of Women Safe House Initiative and Cuddlewithjayne Foundation.
        </h3>
        <div style={{ marginTop: "10px", paddingLeft: "1rem" }}>
          <Link
            to="/about"
            className="btn"
            style={{ marginTop: "10px", paddingLeft: "1rem" }}
          >
            learn more
          </Link>
        </div>

        <SocialLinks styleClass="social-links-hero" />
      </div>
      {/* <Row gutter={0}>
        <Col xs={24} sm={24} lg={24} xl={14} md={24}>
          <Image fluid={fluid} style={{ width: "100%" }} />
        </Col>
        <Col xs={24} sm={24} lg={24} xl={10} md={24} className="hero-text">
          <div className="card-hero">
            <Card style={{ width: "100%", color: "#ffff" }} bordered={false}>
              <h3>
                I'm Jane.
                <br /> I'm hungry for more of Jesus, passionate about life and
                you! <br /> <br />
                Founder of Women Safe House Initiative and Cuddlewithjayne
                Foundation.
              </h3>
              <Link to="/about" className="btn" style={{ marginTop: "5px" }}>
                learn more
              </Link>
              <SocialLinks />
            </Card>
          </div>
        </Col>
      </Row> */}
    </section>

    // <header className="hero">
    //   <div className="section-center hero-center">
    //     <article className="hero-info">
    //       <div>
    //         <div className="underline"></div>
    //         <h1>I'm Jane</h1>
    //         <h4>
    //           A meditation tofu chillwave,<br></br> distillery messenger bag
    //           thundercats <br></br> chicharrones kale chips gochujang.
    //           <br></br> Banh mi direct trade marfa salvia
    //         </h4>
    //         <Link to="/contact" className="btn">
    //           contact me
    //         </Link>
    //         <SocialLinks />
    //       </div>
    //     </article>

    //     {/* <Image fluid={fluid} className="hero-img" /> */}
    //     <img src={heroImg} alt="hero" className="circle hero-img" />
    //   </div>
    // </header>
  );
};

export default Hero;
