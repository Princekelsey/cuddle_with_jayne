import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Col, Card } from "antd";
import heroImg from "../assets/pic3.jpg";
import SocialLinks from "../constants/socialLinks";
import Typical from "react-typical";

const querry = graphql`
  {
    file(relativePath: { eq: "hero-main.png" }) {
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
    "a human capital development expert",
    4000,
    "is the founder, Women Safe House Initiative and Cuddlewithjayne Foundation",
    4000,
  ];

  return (
    <section>
      <Row gutter={0}>
        <Col xs={24} sm={24} lg={24} xl={14} md={24}>
          {" "}
          <img src={heroImg} alt="hero" style={{ width: "100%" }} />
        </Col>
        <Col xs={24} sm={24} lg={24} xl={10} md={24}>
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
      </Row>
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
