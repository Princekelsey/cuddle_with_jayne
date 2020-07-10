import React from "react";
import Layout from "../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Row, Col } from "antd";
import Title from "../components/Title";
import Image from "gatsby-image";
import SEO from "../components/SEO";
import SocialLinks from "../constants/socialLinks";

const querry = graphql`
  {
    file(relativePath: { eq: "pic2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    second: file(relativePath: { eq: "pic4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = (
  {
    // data: {
    //   about: { nodes },
    // },
  }
) => {
  // const { title, info, image } = nodes[0];

  const {
    file: {
      childImageSharp: { fluid },
    },
    second: { childImageSharp },
  } = useStaticQuery(querry);

  return (
    <Layout>
      <SEO title="About" />

      <section
        // style={{ width: "90%", margin: "0 auto" }}
        className="about-page"
      >
        <div className="section-center">
          <div>
            <Title title="About Me" />
          </div>

          <Row gutter={16}>
            <Col xs={24} sm={24} lg={12} xl={12}>
              {" "}
              <Image fluid={childImageSharp.fluid} style={{ width: "100%" }} />
            </Col>
            <Col xs={24} sm={24} lg={12} xl={12}>
              <div style={{ margin: "10px" }}>
                <p style={{ fontSize: "20px" }}>
                  Jane Nnanna is passionate about mentoring and empowering women
                  and young people. She does this through several mentoring and
                  life classes for women and the youth. <br></br> <br></br> Over
                  the past 10years she has actively mentored, supported and been
                  a backbone for women across the African continent. She is also
                  deeply committed to young people having been in the Campus
                  ministry for over 12 years.<br></br> <br></br> She is Convener
                  of "cuddlewithjayne online" a social media live broadcast
                  which involves an hour of intense revival prayers and word
                  charge. She is also the convener of "Unlocking My Prophetic
                  Destiny" an annual Singles retreat for young people. <br></br>{" "}
                  <br></br>She is the founder of the Women Safe House
                  Initiative, where she carters for women who are victims of
                  rape, sexual abuse, domestic violence and child marriage .
                </p>
              </div>
            </Col>

            <Col xs={24} sm={24} lg={12} xl={12}>
              <div style={{ margin: "10px", marginTop: "10px" }}>
                <p style={{ fontSize: "20px" }}>
                  The rehabilitation center provides <br></br> <br></br> ·
                  Spiritual empowerment
                  <br></br> · Counseling · Skill/Vocational acquisition<br></br>{" "}
                  · Education and mental development <br></br> · Access to
                  funding and financial support<br></br> <br></br> Together with
                  her husband Kelechi Nnanna, she pastors a branch of Dominion
                  City Church International in the southern part of Nigeria.
                  Through her evangelistic meetings, many people experience
                  revival, fresh encounters and healings. She is a woman hungry
                  for more of Jesus.
                </p>
                <div style={{ paddingTop: "10px" }}>
                  <Link to="/contact" className="btn">
                    Get in touch
                  </Link>
                </div>
                <SocialLinks />
              </div>
            </Col>
            <Col xs={24} sm={24} lg={12} xl={12}>
              {" "}
              <Image fluid={fluid} style={{ width: "100%" }} />
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   {
//     about: allStrapiAbout {
//       nodes {
//         title
//         info
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default About;
