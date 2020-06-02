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
  const {
    allStrapiEvents: { nodes: events },
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <Hero />
      <Services />
      <Testmoines />
      <Events events={events} title="recent events" showLink />
      <Blogs blogs={blogs} title="featured posts" showLink />
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        date(formatString: "MMM Do, YYYY")
        slug
        description
        id
        title
        category
        topimage {
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
