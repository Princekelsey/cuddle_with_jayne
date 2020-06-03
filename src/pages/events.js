import React, { useState, useMemo } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Events from "../components/Events";
import { Pagination } from "antd";
import SEO from "../components/SEO";

const EventsPage = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    allStrapiEvents: { nodes: events, totalCount },
  } = data;

  const postPerPage = 3;

  const onChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedEvent = useMemo(() => {
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;

    return events.slice(firstIndex, lastIndex);
  }, [currentPage, postPerPage]);
  return (
    <Layout>
      <SEO title="Events" />
      <section className="projects-page">
        <Events events={paginatedEvent} title="all events" />
        <Pagination
          defaultCurrent={currentPage}
          onChange={onChange}
          total={totalCount}
          pageSize={postPerPage}
          hideOnSinglePage={true}
          style={{
            paddingBottom: "25px",
            paddingTop: "0",
            marginTop: "0",
            textAlign: "center",
          }}
        />
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
