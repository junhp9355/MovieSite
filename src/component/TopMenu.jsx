import React from "react";
import "../style/TopMenu.css";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <body>
      <section>
        <nav className="TopMenuNav">
          <Link to="/">
            <div className="MainLogoFixed">
              <img className="MainLogo" src="./img/MovieLogo.png" alt="Logo" />
            </div>
          </Link>
          <div className="TopMenuFixed">
            <div className="MenuFixed">
              <a href="http://localhost:3000/contents" className="Menu01">
                TV 프로그램
              </a>
            </div>
            <div className="MenuFixed">
              <a href="#!" className="Menu02">
                영화
              </a>
            </div>
            <div className="MenuFixed">
              <a href="#!" className="Menu03">
                최신 등록 콘텐츠
              </a>
            </div>
            <div className="MenuFixed">
              <a href="#!" className="Menu04">
                내가 찜한 콘텐츠
              </a>
            </div>
          </div>
          <div className="TopSearchFixed">
            <input className="SearchInput" />
            <button className="SearchBt">검색</button>
          </div>
        </nav>
      </section>
    </body>
  );
};

export default TopMenu;
