import React from "react";
import "../style/TopMenu.css";
import { Link } from "react-router-dom";

const TopMenu = ({ onSearch, search, onChangeSearch }) => {
  return (
    <body>
      <section>
        <nav className="TopMenuNav">
          <Link to="/">
            <div className="MainLogoFixed">
              <img className="MainLogo" src="/img/MovieLogo.png" alt="Logo" />
            </div>
          </Link>
          <div className="TopMenuFixed">
            <div className="MenuFixed">
              <a href="http://localhost:3000/contents" className="Menu01">
                한국 드라마
              </a>
            </div>
            <div className="MenuFixed">
              <a href="http://localhost:3000/moviecontents" className="Menu02">
                영화
              </a>
            </div>
            <div className="MenuFixed">
              <a href="#!" className="Menu03">
                최신 등록 콘텐츠
              </a>
            </div>
            <Link to="/favoriteContents">
              <div className="MenuFixed">
                <a href="#!" className="Menu04">
                  내가 찜한 콘텐츠
                </a>
              </div>
            </Link>
          </div>
          <form className="TopSearchFixed" onSubmit={(e) => onSearch(e)}>
            <input
              className="SearchInput"
              type="text"
              value={search}
              placeholder="검색"
              onChange={onChangeSearch}
            />
            <button className="SearchBt" type="submit">
              검색
            </button>
          </form>
        </nav>
      </section>
    </body>
  );
};

export default TopMenu;
