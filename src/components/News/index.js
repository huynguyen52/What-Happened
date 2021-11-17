import React from "react";

import "./news.scss";
import brand3 from "../../images/news-img-03.png";
import brand4 from "../../images/news-img-04.png";
import brand5 from "../../images/news-img-05.png";
import brand1 from "../../images/news-img-01.png";
import tag1 from "../../images/news-object-03.png";
import tag2 from "../../images/news-object-04.png";
import tag3 from "../../images/news-object-05.png";
import NewsItem from "./NewsItem";

function index() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__header">
          <h4 className="news__title title--normal">Happened’s issue</h4>
          <p className="news__desc desc--smaller">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <button className="btn btn--primary">see more</button>
        </div>
      </div>
      <div className="container--fluid">
        <div className="news__content">
          {/* brand, image, logo, tag, title, position  */}
          <NewsItem
            image={brand3}
            logo={brand1}
            title="whpn issue"
            tag={tag1}
          />
          <NewsItem
            brand="E brand"
            image={brand4}
            logo={brand1}
            tag={tag2}
            position="top-left"
            bgBlack={true}
          />
          <NewsItem
            brand="B brand"
            image={brand5}
            logo={brand1}
            title="whpn issue"
            bgBlack={true}
          />
          <NewsItem
            brand="C brand"
            image={brand3}
            logo={brand1}
            title="whpn issue"
          />
          <NewsItem
            brand="D brand"
            image={brand5}
            logo={brand1}
            title="whpn issue"
            tag={tag3}
            position="bottom-left"
            bgBlack={true}
          />
        </div>
      </div>
      <div className="news-tag"></div>
    </section>
  );
}

export default index;
