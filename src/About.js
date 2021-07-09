import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const About = () => {
  const { name } = useParams();
  console.log(name);

  const match = useRouteMatch("/about/The Richest Man In Babylon");
  const showBuyButton = match && match.isExact;
  console.log(match);

  return (
    <>
      <h1>ABOUT {name}</h1>
      {showBuyButton && <button>Buy Now</button>}
    </>
  );
};

export default About;
