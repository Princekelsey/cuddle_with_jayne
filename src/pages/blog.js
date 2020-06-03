import React, { useState, useMemo } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
import { Pagination } from "antd";

const Blog = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 6;
  const onChange = (page) => {
    setCurrentPage(page);
  };

  const {
    allStrapiBlogs: { nodes: blogs, totalCount },
  } = data;

  const paginatedPost = useMemo(() => {
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;

    return blogs.slice(firstIndex, lastIndex);
  }, [currentPage, postPerPage]);

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={paginatedPost} title="all blogs" />
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
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        category
        date(formatString: "MMM Do, YYYY")
        description
        id
        title
        slug
        topimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default Blog;
