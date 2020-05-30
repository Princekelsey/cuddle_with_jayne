import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";

import Testmoines from "../components/Testmoines";
import Events from "../components/Events";
import Blogs from "../components/Blogs";
//import "../css/main.css";

export default ({ data }) => {
  console.log(data);
  const {
    allStrapiEvents: { nodes: events },
  } = data;

  return (
    <Layout>
      <Hero />
      <Services />
      <Testmoines />
      <Events events={events} title="recent events" showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiEvents(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        venue
        description
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        event_tag {
          id
          title
        }
      }
    }
  }
`;
