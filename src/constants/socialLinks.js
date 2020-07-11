import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: (
      <FaFacebookSquare
        className="social-icon"
        style={{ marginRight: "20px" }}
      ></FaFacebookSquare>
    ),
    url: "https://www.facebook.com/Cuddlewithjayne-833487233438771",
  },

  {
    id: 3,
    icon: (
      <FaYoutube
        className="social-icon"
        style={{ marginRight: "20px" }}
      ></FaYoutube>
    ),
    url: "https://www.youtube.com/channel/UCd5UAuh42UZIMLijUerom4w",
  },
  // {
  //   id: 2,
  //   icon: <FaLinkedin className="social-icon"></FaLinkedin>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 4,
    icon: (
      <FaInstagram
        className="social-icon"
        style={{ marginRight: "20px" }}
      ></FaInstagram>
    ),
    url: "https://www.instagram.com/cuddlewithjayne",
  },
  // {
  //   id: 5,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://www.twitter.com",
  // },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
