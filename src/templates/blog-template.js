import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";
import TalkyardCommentsIframe from "@debiki/gatsby-plugin-talkyard";

const ComponentName = ({ data }) => {
  const { content, title, description, id, author } = data.blog;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h2>
              {title}
              {/* <span style={{ fontSize: "14px" }}>by {author}</span> */}
            </h2>

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
          <div style={{ paddingTop: "40px" }}>
            <TalkyardCommentsIframe discussionId={id} />
          </div>
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
      description
      id
    }
  }
`;

export default ComponentName;
