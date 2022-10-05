import React from "react";
import "../style/FavoriteContents.css";
import TopMenu from "./TopMenu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FavoriteContents = () => {
  const [favoriteDrama, setFavoriteDrama] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/dramalike",
          method: "get",
        });
        setFavoriteDrama(data.data);
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

  const onRemove = async (id) => {
    const data = await axios.delete(`http://localhost:4000/dramalike/${id}`);
    setFavoriteDrama(data.data);
  };

  return (
    <body className="FavoritePage">
      <TopMenu />
      <section className="FavoriteList">
        <div className="FavoritePageTitle">내가 찜한 콘텐츠</div>
        <div className="FavoriteLine" />

        <nav className="FavoriteListFixed">
          {favoriteDrama.map((item, index) => (
            <section className="FavoriteItemList">
              <nav className="FavoriteItemFixed">
                <td className="FavoriteItemLink">
                  <Link
                    to={`/contents/${item.id}`}
                    style={{ textDecoration: "none", cursor: "default" }}
                  >
                    <img src={item.address} alt="img" className="ItemImg" />
                    <a href="#!" className="FavoriteItemTitle">
                      {item.title}
                    </a>
                  </Link>
                </td>
                <td className="FavoriteItemGrade">{item.grade}</td>
                <td className="FavoriteItemActor">{item.actor}</td>
                <form>
                  <button
                    type="submit"
                    onClick={() => {
                      onRemove(item.id);
                      alert("찜한 콘텐츠에서 삭제되었습니다.");
                    }}
                    className="DeleteBt"
                  >
                    삭제
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

export default FavoriteContents;
