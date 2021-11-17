import React from "react";

import "./Product.scss";
import heart from "../../images/hearticon.png";

function Product({ img, title, price, wishlist }) {
  return (
    <article className="product">
      <div className="product__img">
        <img src={img} alt="product-01" />
      </div>
      <div className="product__content">
        <h4 className="product__title sub-title">{title} </h4>
        <div className="product__meta">
          <span className="product__price">{price} won</span>
          <span className="product__wishlist">
            <img src={heart} alt="wishlist" />
            {wishlist}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Product;
