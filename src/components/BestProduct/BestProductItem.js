import React from "react";

import "./BestProductItem.scss";

function BestProductItem({ tag, title, label, img }) {
  return (
    <article className="best-product-item">
      <div className="best-product-item__tag">
        <img src={tag} alt="" />
      </div>
      <div className="best-product-item__img">
        <img src={img} alt="product-01" />
      </div>
      <div className="best-product-item__label">
        <p>{title}</p>
        <img src={label} alt="go" />
      </div>
    </article>
  );
}

export default BestProductItem;
