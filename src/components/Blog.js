import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";
const Blog = ({ category, date, description, slug, title, topimage, id }) => {
  console.log(topimage);

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {topimage && (
          <Image fluid={topimage.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topimage: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default Blog;
