import React from "react";
import Layout from "../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Row, Col } from "antd";
import Title from "../components/Title";
import Image from "gatsby-image";
import SEO from "../components/SEO";
import Typical from "react-typical";

const querry = graphql`
  {
    file(relativePath: { eq: "pic2.jpg" }) {
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
  } = useStaticQuery(querry);
  const steps = [
    "is a revivalist",
    4000,
    "a life coach",
    4000,
    "a social worker",
    4000,
    "a human capital development expert",
    4000,
    "is the founder, Women Safe House Initiative and Cuddlewithjayne Foundation",
    4000,
  ];

  return (
    <Layout>
      <SEO title="About" />

      <section>
        <div className="section-center">
          <Title title="About Me" />
        </div>

        <Row gutter={16}>
          <Col xs={24} sm={24} lg={12} xl={12}>
            {" "}
            <Image fluid={fluid} style={{ width: "100%" }} />
          </Col>
          <Col xs={24} sm={24} lg={12} xl={12}>
            <div style={{ marginTop: "70px", margin: "10px" }}>
              <h4>
                Jane Nnanna{" "}
                <strong>
                  <Typical loop={Infinity} wrapper="b" steps={steps} />
                </strong>
              </h4>

              <p>
                Passionate about mentoring and empowering women. Holds mentoring
                and life classes for women. <br></br> Convener of
                cuddlewithjayne social media live broadcast which involves an
                hour of intense revival prayers and word charge.<br></br> As the
                founder of the Women Safe House Initiative, she carters for
                women who are victims of rape or sexual abuse; domestic violence
                and child marriage . <br></br> <br></br>The rehabilitation
                center provides <br></br> <br></br> · spiritual empowerment
                <br></br> · counseling · skill/vocational acquisition<br></br> ·
                education and mental development <br></br> · access to funding
                and financial support<br></br> <br></br> Together with her
                husband Kelechi Nnanna, she pastors a branch of Dominion City
                Church International in the southern part of Nigeria. Through
                her evangelistic meetings, many people experience revival, fresh
                encounters and healings. She is a woman hungry for more of
                Jesus.
              </p>
              <Link to="/contact" className="btn">
                contact me
              </Link>
            </div>
          </Col>
        </Row>
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
