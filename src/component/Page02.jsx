import React, { useState, useEffect } from "react";
import "../style/Page02.css";
import TVProKorSlider from "./TVProKorSlider";
import FavoriteSlider from "./FavoriteSlider";
import { Link } from "react-router-dom";
import axios from "axios";

const Page02 = () => {
  const [movieItem, setMovieItem] = useState([]);
  const [dramaItem, setDreamItem] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/movie",
          method: "get",
        });
        setDreamItem(data.data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  if (error) {
    console.log(error);
    return <>에러:{error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const getDatas = async () => {
    try {
      const data = await axios({
        url: "http://localhost:4000/movies",
        method: "get",
      });
      setMovieItem(data.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <section className="Page02">
      <nav className="Page02Area">
        <Link to="/contents">
          <div className="Page02category">한국 TV프로그램</div>
        </Link>
        <div className="Page2Fixed">
          <TVProKorSlider dramaItem={dramaItem} />
        </div>
        <br />
        <div className="Page02category02">인기 콘텐츠</div>
        <div className="Page2Fixed02">
          <FavoriteSlider dramaItem={dramaItem} />
        </div>

        <div className="Pageready">페이지 준비중...</div>
      </nav>
    </section>
  );
};

export default Page02;
