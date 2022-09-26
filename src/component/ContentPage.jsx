import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/ContentPage.css";
import TopMenu from "./TopMenu";

const ContentPage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/movie",
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
    <body className="ContentPage">
      <TopMenu />
      <section className="ContentList">
        <div className="ContentPageTitle">한국 TV프로그램</div>
        <div className="ContentLine" />

        <nav className="ListFixed">
          {movie.map((item, index) => (
            <section className="ItemList">
              <nav className="ItemFixed">
                <img src={item.address} alt="img" className="ItemImg" />
                <td className="ItemLink">
                  <Link
                    to={`/contents/${item.title}`}
                    style={{ textDecoration: "none", cursor: "default" }}
                  >
                    <a href="#!" className="ItemTitle">
                      {item.title}
                    </a>
                  </Link>
                </td>
                <td className="ItemGrade">{item.grade}</td>
                <td className="ItemActor">{item.actor}</td>
              </nav>
            </section>
          ))}
        </nav>
      </section>
    </body>
  );
};

export default ContentPage;