import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import heroImg from "../assets/hero-main-2.png";
import SocialLinks from "../constants/socialLinks";

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

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Jane</h1>
            <h4>
              A 'm baby meditation tofu chillwave,<br></br> distillery messenger
              bag thundercats <br></br> chicharrones kale chips gochujang.
              <br></br> Banh mi direct trade marfa salvia
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>

        {/* <Image fluid={fluid} className="hero-img" /> */}
        <img src={heroImg} alt="hero" className="circle hero-img" />
      </div>
    </header>
  );
};

export default Hero;
