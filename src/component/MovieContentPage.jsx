import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/MovieContentPage.css";
import TopMenu from "./TopMenu";
// import heartBlack from "../asset/heart_black.png";
// import heartRed from "../asset/heart_red.png";

const ContentPage = () => {
  const [movie, setMovie] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/movies",
          method: "get",
        });
        setMovie(data.data);
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

  return (
    <body className="MovieContentPage">
      <TopMenu />
      <section className="MovieContentList">
        <div className="MovieContentPageTitle">
          영화
          <p className="MovieContentPageSubTitle">
            온몸을 옥죄는 공포에서 웃음을 부르는 코미디, 공감을 불러일으키는
            드라마와 로맨스까지.
            <br />
            영화가 당신에게 말을 걸어온다.
            <br />
            수많은 이야기가 건네는 감동과 위로! 그것이 우리가 영화를 보는 이유.
          </p>
        </div>

        <div className="MovieContentLine" />

        <nav className="MovieListFixed">
          {movie.map((item, index) => (
            <section className="MovieItemList">
              <nav className="MovieItemFixed">
                <td className="MovieItemLink">
                  <Link
                    to={`/moviecontents/${item.id}`}
                    style={{ textDecoration: "none", cursor: "default" }}
                  >
                    <img src={item.address} alt="img" className="ItemImg" />
                    <a href="#!" className="MovieItemTitle">
                      {item.title}
                    </a>
                  </Link>
                </td>
                <td className="MovieItemGrade">{item.grade}</td>
                <td className="MovieItemActor">{item.actor}</td>
                <form>
                  <button
                    type="submit"
                    onClick={() => {
                      setSelectMovie(item);
                      alert("찜한 콘텐츠에 저장되었습니다.");
                    }}
                    className="FavoriteBt"
                  >
                    찜
                    {/* <img src={addbutton} alt="ss" className="addbutton" /> */}
                  </button>
                </form>
              </nav>
            </section>
          ))}
        </nav>
      </section>
    </body>
  );
};

export default ContentPage;
