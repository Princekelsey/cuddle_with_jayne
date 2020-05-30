import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Events from "../components/Events";

const EventsPage = ({ data }) => {
  const {
    allStrapiEvents: { nodes: events },
  } = data;
  return (
    <Layout>
      <section className="projects-page">
        <Events events={events} title="all events" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiEvents {
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
      totalCount
    }
  }
`;

export default EventsPage;
