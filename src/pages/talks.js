import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Services from "../components/Services";

const TalksPage = () => {
  return (
    <Layout>
      <SEO title="Talks page" />
      <Services />
    </Layout>
  );
};

export default TalksPage;
