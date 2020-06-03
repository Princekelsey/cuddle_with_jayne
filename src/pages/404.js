import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title="404" />
      <main className="error-page">
        <div className="error-container">
          <h2>Oops! The page your are looking for does not exist</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
