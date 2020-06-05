import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { notification } from "antd";

const Contact = () => {
  const openNotificationWithIcon = (type, description) => {
    notification[type]({
      message: "Form Submission",
      description: description,
    });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();

        openNotificationWithIcon("success", "message submitted successfully");
      } else {
        openNotificationWithIcon("error", "Error submitting message");
      }
    };
    xhr.send(data);
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            action="https://formspree.io/mqkyqbao"
            method="POST"
            onSubmit={submitForm}
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

export default Contact;
