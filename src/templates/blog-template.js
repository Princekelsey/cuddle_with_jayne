import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

const ComponentName = ({ data }) => {
  const { content, title } = data.blog;
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h2>{title}</h2>
            <ReactMarkdown
              source={content}
              transformImageUri={(url) =>
                url.startsWith("http")
                  ? url
                  : `${process.env.IMAGE_BASE_URL}${url}`
              }
            />
          </article>
          <Link to="/blog" className="btn center-btn">
            back to blogs
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
    }
  }
`;

export default ComponentName;
