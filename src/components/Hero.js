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
        <article className="hero-info"></article>

        {/* <Image fluid={fluid} className="hero-img" /> */}
        <img src={heroImg} alt="hero" className="circle hero-img" />
      </div>
    </header>
  );
};

export default Hero;
