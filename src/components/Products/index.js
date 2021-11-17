import React from "react";

import "./products.scss";
import Product from "./Product";
import img01 from "../../images/img-01.png";
import img02 from "../../images/img-02.png";
import img03 from "../../images/img-03.png";
import img04 from "../../images/img-04.png";
import img05 from "../../images/img-05.png";
import img06 from "../../images/img-06.png";
import img07 from "../../images/img-07.png";
import img08 from "../../images/img-08.png";
import img09 from "../../images/img-11.png";
import img10 from "../../images/img-12.png";
import img12 from "../../images/img-14.png";
import img13 from "../../images/img-12.png";
import img14 from "../../images/img-14.png";
import img15 from "../../images/img-15.png";
import img16 from "../../images/img-16.png";
import img17 from "../../images/img-17.png";
import img18 from "../../images/img-18.png";
import img19 from "../../images/img-19.png";
import img20 from "../../images/img-20.png";
import img21 from "../../images/img-21.png";
import img22 from "../../images/img-22.png";
import img23 from "../../images/img-23.png";
import img24 from "../../images/img-24.png";
import img25 from "../../images/img-25.png";

function index() {
  const data = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];
  return (
    <section className="products">
      <div className="container">
        <div className="products__content">
          {data.map((item, index) => (
            <Product
              key={index}
              img={item}
              title="[What happen] How to create "
              price="2,500"
              wishlist={236}
            />
          ))}
        </div>
        <button className="btn btn--primary">See more</button>
      </div>
    </section>
  );
}

export default index;
