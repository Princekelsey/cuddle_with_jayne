import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Testmoines from "../components/Testmoines";

const TestimoniesPage = () => {
  return (
    <Layout>
      <SEO title="Testimonies" description="This is the testomies page" />
      <Testmoines />
    </Layout>
  );
};

export default TestimoniesPage;
