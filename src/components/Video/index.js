import React from "react";

import "./video.scss";
import video from "../../images/video.png";

function index() {
  return (
    <section className="video">
      <div className="video__header">
        <h4 className="video__title title--bigger extra-bold">what happened</h4>
        <p className="video__desc desc--normal">
          How to create mobile-optimized videos in minutes. Not designer, every
          team makes a lot of videos Can be trimmed. Take the first{" "}
        </p>
        <button className="btn btn--primary">see more</button>
      </div>
      <div className="video__content">
        <div className="video__vid">
          <img src={video} alt="video" />
        </div>
      </div>
    </section>
  );
}

export default index;
