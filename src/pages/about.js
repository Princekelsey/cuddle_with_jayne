import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, info, image } = nodes[0];
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="about-img" />
          )}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default About;
