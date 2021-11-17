import React from "react";

import banner from "../../images/main-banner.png";

import "./hero.scss";

function index() {
  return (
    <section className="hero">
      <img src={banner} alt="banner" />
    </section>
  );
}

export default index;
