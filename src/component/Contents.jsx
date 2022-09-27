import React, { useEffect, useState } from "react";
import "../style/Contents.css";
import TopMenu from "./TopMenu";
import { useParams } from "react-router-dom";
import axios from "axios";

const Contents = () => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  const getItem = async (id) => {
    try {
      const data = await axios.get(`http://localhost:4000/movie/${id}`);
      setContents(data.data);
      console.log(data);
    } catch (e) {
      setError(e);
    }
  };
  return (
    <body className="ContentsBody">
      <TopMenu />
      <div className="ContentsLine" />
      <section className="ContentsSection">
        <div className="black" />
        <div className="ContentsHead">
          <div className="ContentsMainLogoFixed">
            <img
              src="/img/MovieLogo.png"
              alt="Logo"
              className="ContentsMainLogo"
            />
            <p className="ContentsMainText">시리즈</p>
          </div>
          <div className="ContentsBackFixed">
            <img src={contents.backimg} alt="img" className="ContentsImg" />
          </div>
          <div className="ContentsTextMain">
            <img src={contents.logo} alt="logo" className="ContentsLogo" />
            {/* <thead className="ContentsTextTitle">{contents.title}</thead> */}
            <tbody className="ContentsTextBody">
              <div className="ContentsInfo">
                <td>{contents.years}</td>
                <td className="Infospace">|</td>
                <td>{contents.age}</td>
                <td className="Infospace">|</td>
                <td>{contents.genre}</td>
                <td className="Infospace">|</td>
                <td className="gradevertical">{contents.grade}</td>
              </div>
              <td className="Contentscontens">{contents.content}</td>
              <td className="ContentsActorInfo">{contents.actor}</td>
            </tbody>
          </div>
        </div>
      </section>
      <div className="ContentsVideo">
        <iframe
          width="1100"
          height="620"
          src={contents.video}
          title={contents.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="Buy">
        <a href="#!" className="BuyText">
          멤버십 가입하기
        </a>
      </div>
    </body>
  );
};

export default Contents;
