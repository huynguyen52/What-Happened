import React from "react";

import "./NewsItem.scss";

function NewsItem({ brand, image, logo, tag, title, position, bgBlack }) {
  const temp = ["top-left", "bottom-left"];
  const newPosition = temp.find((item) => item === position);

  if (brand) {
    return (
      <article className={`${bgBlack ? "news-item black" : "news-item"}`}>
        <div className="news-item__header">
          <h5 className="news-item__brand">{brand}</h5>
        </div>
        <div className="news-item__img">
          <img src={image} alt={brand} />
        </div>
        {tag && (
          <div className={`tag ${newPosition ? newPosition : "bottom-right"}`}>
            <img src={tag} alt="tag1" />
          </div>
        )}
      </article>
    );
  }
  return (
    <article className="news-item">
      <div className="news-item__content">
        <p className="news-item__title">{title}</p>
        <div className="news-item__logo">
          <img src={logo} alt="brand1" />
        </div>
      </div>
      {tag && (
        <div className={`tag ${newPosition ? newPosition : "bottom-right"}`}>
          <img src={tag} alt="tag1" />
        </div>
      )}
    </article>
  );
}

export default NewsItem;
