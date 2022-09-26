import React from "react";
import "../style/Page02.css";
import TVProKorSlider from "./TVProKorSlider";
import FavoriteSlider from "./FavoriteSlider";
import { Link } from "react-router-dom";

const Page02 = () => {
  return (
    <section className="Page02">
      <nav className="Page02Area">
        <Link to="/contents">
          <div className="Page02category">한국 TV프로그램</div>
        </Link>
        <div className="Page2Fixed">
          <TVProKorSlider />
        </div>
        <br />
        <div className="Page02category02">인기 콘텐츠</div>
        <div className="Page2Fixed02">
          <FavoriteSlider />
        </div>

        <div className="Pageready">페이지 준비중...</div>
      </nav>
    </section>
  );
};

export default Page02;
