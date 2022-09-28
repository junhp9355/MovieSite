import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";
import Page01 from "./Page01";
import Page02 from "./Page02";
import "../style/Main.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/movie",
          method: "get",
        });
        setSearchList(data.data);
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

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      alert("xxxxx");
    } else {
      const filterDate = searchList.filter((data) =>
        data.title.includes(search)
      );
      setSearchWord(filterDate);
      // console.log(setSearchWord);
    }
    setSearch("");
  };
  return (
    <section className="MovieMainCon">
      <nav className="MainNav">
        <TopMenu
          onSearch={onSearch}
          search={search}
          onChangeSearch={onChangeSearch}
        />
        <div className="Line" />
        <div className="Mainspace" />
        {searchWord.map((searchItem, index) => {
          return (
            <section className="search">
              {/* <p className="searchTitle">찾으시는 콘텐츠 검색결과...</p> */}
              <Link to={`/contents/${searchItem.id}`}>
                <nav className="searchItem">
                  <div className="searchImgFixed">
                    <img
                      src={searchItem.address}
                      alt="searchimg"
                      className="searchImg"
                    />
                    <nav className="searchInfo">
                      <div>
                        <div>{searchItem.title}</div>
                        <div className="searchsubinfo">
                          <div>{searchItem.years}</div>
                          <div>{searchItem.age}</div>
                          <div>{searchItem.genre}</div>
                          <div>{searchItem.actor}</div>
                        </div>
                      </div>
                      <div className="searchContents">{searchItem.content}</div>
                    </nav>
                  </div>
                </nav>
              </Link>
              <div className="Mainspace" />
              <div className="Line" />
              <div className="Mainspace" />
            </section>
          );
        })}

        <Page01 />
        <div className="Mainspace" />
        <div className="Line" />
        <div className="Mainspace" />
        <Page02 />
        <div className="Mainspace" />
        <div className="Mainspace" />
      </nav>
    </section>
  );
};

export default Main;
