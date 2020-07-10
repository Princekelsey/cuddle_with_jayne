import React from "react";
import { Link } from "gatsby";
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },

  {
    id: 3,
    text: "talks",
    url: "/talks",
  },
  {
    id: 4,
    text: "events",
    url: "/events/",
  },
  {
    id: 5,
    text: "blog",
    url: "/blog/",
  },

  {
    id: 6,
    text: "testimonies",
    url: "/testimonies",
  },
  {
    id: 7,
    text: "contact",
    url: "/contact",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
