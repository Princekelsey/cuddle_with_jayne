import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="all blogs" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlogs {
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
      totalCount
    }
  }
`;

export default Blog;
