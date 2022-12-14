import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/ContentPage.css";
import TopMenu from "./TopMenu";
// import heartBlack from "../asset/heart_black.png";
// import heartRed from "../asset/heart_red.png";

const ContentPage = () => {
  const [drama, setDrama] = useState([]);
  const [selectDrama, setSelectDrama] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/movie",
          method: "get",
        });
        setDrama(data.data);
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

  const onAddContent = async (id) => {
    try {
      const data = await axios.post(`http://localhost:4000/dramalike/${id}`);
      console.log(data);
    } catch (e) {
      setError(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddContent(selectDrama.id);
  };

  // const addbutton = heart ? heartBlack : heartRed;

  return (
    <body className="ContentPage">
      <TopMenu />
      <section className="ContentList">
        <div className="ContentPageTitle">
          한국 드라마
          <p className="ContentPageSubTitle">
            강렬한 재미와 긴장감, 로맨스와 서스펜스가 넘치는 한국 드라마의
            세계로 여러분을 초대합니다.
            <br /> 웃어도 되고 울어도 되고, 비명을 질러도 됩니다. 마음껏
            즐기세요.
          </p>
        </div>

        <div className="ContentLine" />

        <nav className="ListFixed">
          {drama.map((item, index) => (
            <section className="ItemList">
              <nav className="ItemFixed">
                <td className="ItemLink">
                  <Link
                    to={`/contents/${item.id}`}
                    style={{ textDecoration: "none", cursor: "default" }}
                  >
                    <img src={item.address} alt="img" className="ItemImg" />
                    <a href="#!" className="ItemTitle">
                      {item.title}
                    </a>
                  </Link>
                </td>
                <td className="ItemGrade">{item.grade}</td>
                <td className="ItemActor">{item.actor}</td>
                <form onSubmit={onSubmit}>
                  <button
                    type="submit"
                    onClick={() => {
                      setSelectDrama(item);
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
