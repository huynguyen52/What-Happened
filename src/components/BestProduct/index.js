import React from "react";

import tag01 from "../../images/producticon-01.png";
import tag02 from "../../images/producticon-02.png";
import tag03 from "../../images/producticon-03.png";
import img01 from "../../images/best-image-01.png";
import img02 from "../../images/best-image-02.png";
import img03 from "../../images/best-image-03.png";
import go from "../../images/go-icon.png";
import "./bestProduct.scss";
import BestProductItem from "./BestProductItem";

function index() {
  return (
    <section className="best-product">
      <div className="container">
        <div className="best-product__header">
          <h4 className="best-product__title title--bigger"> Best Product</h4>
          <p className="best-product__desc desc--normal">
            How to create mobile-optimized videos minutes. Not a designer, every
            team makes a lot of videos Can be trimmed. Take the first
          </p>
        </div>
        <div className="best-product__content">
          <BestProductItem
            tag={tag01}
            title="How to create mobile-optimized"
            img={img01}
            label={go}
          />
          <BestProductItem
            tag={tag02}
            title="How to create mobile-optimized"
            img={img02}
            label={go}
          />
          <BestProductItem
            tag={tag03}
            title="How to create mobile-optimized"
            img={img03}
            label={go}
          />
        </div>
      </div>
    </section>
  );
}

export default index;
