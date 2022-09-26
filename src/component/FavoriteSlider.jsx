import React from "react";
import Slider from "react-slick";
import "../style/FavoriteSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavoriteSlider = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    speed: 350, //콘텐츠를 넘어갈 때 속도이다.단위 (ms)이다. 1000ms = 1s
    slidesToShow: 5, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 3, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    arrows: true,
    centerMode: true,
    centerPadding: "-350px",
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "KorProgram",
    pauseOnFocus: true,
  };

  return (
    <div className="FavoriteCon">
      <Slider {...settings}>
        <div className="FavoriteFixed">
          <img
            className="Favorite"
            src="img/지금우리학교는.jpg"
            alt="TVProKor"
          />
          <a className="FavoriteTitle" href="#!">
            지금 우리 학교는
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/지옥.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            지옥
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/스위트홈.jpg" alt="TVProKor" />

          <a className="FavoriteTitle" href="#!">
            스위트홈
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/소년심팡.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            소년 심판
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/오징어게임.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            오징어 게임
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/나의아저씨.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            나의 아저씨
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/열여덟의순간.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            열여덟의 순간
          </a>
        </div>
        <div className="FavoriteFixed">
          <img className="Favorite" src="img/미생.jpg" alt="TVProKor" />
          <a className="FavoriteTitle" href="#!">
            미생
          </a>
        </div>
        <div className="FavoriteFixed">
          <img
            className="Favorite"
            src="img/힘쎈여자도봉순.jpg"
            alt="TVProKor"
          />
          <a className="FavoriteTitle" href="#!">
            힘쎈여자도봉순
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default FavoriteSlider;
