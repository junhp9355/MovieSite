import React from "react";
import Slider from "react-slick";
import "../style/TVProKorSlider.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../style/slick.css";
import "../style/slick-theme.css";

const TVProKorSlider = () => {
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
    <div className="TVProKorCon">
      <Slider {...settings}>
        <div className="TVProKorFixed">
          <img
            className="TVProKor"
            src="img/슬기로운의사생활.jpg"
            alt="TVProKor"
          />
          <a className="KorTVProTitle" href="#!">
            슬기로운 의사생활
          </a>
        </div>
        <div className="TVProKorFixed">
          <img
            className="TVProKor"
            src="img/슬기로운깜빵생활.jpg"
            alt="TVProKor"
          />
          <a className="KorTVProTitle" href="#!">
            슬기로운 깜빵생활
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/미스터션샤인.jpg" alt="TVProKor" />

          <a className="KorTVProTitle" href="#!">
            미스터 션사인
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/나의해방일지.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            나의 해방일지
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/갯마을차차차.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            갯마을 차차차
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/그해우리는.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            그 해 우리는
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/인사이더.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            인사이더
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/DP.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            D.P.
          </a>
        </div>
        <div className="TVProKorFixed">
          <img className="TVProKor" src="img/멜로가체질.jpg" alt="TVProKor" />
          <a className="KorTVProTitle" href="#!">
            멜로가체질
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default TVProKorSlider;
