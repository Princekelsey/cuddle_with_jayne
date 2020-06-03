import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            method="POST"
            data-netlify="true"
            name="contact"
            data-netlify-recaptcha="true"
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <div style={{ paddingTop: "10px" }}>
                <div data-netlify-recaptcha="true"></div>
              </div>
            </div>
            <button type="submit" className="submit-btn btn">
              {" "}
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
