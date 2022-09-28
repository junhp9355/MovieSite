import React from "react";
import Slider from "react-slick";
import "../style/TVProKorSlider.css";
import "../style/slick.css";
import "../style/slick-theme.css";
import { Link } from "react-router-dom";

const TVProKorSlider = ({ movieItem }) => {
  const tvProKorList = movieItem.slice(10);

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
        {tvProKorList.map((tvProList, index) => (
          <div className="TVProKorFixed">
            <Link to={`/contents/${tvProList.id}`}>
              <img
                className="TVProKor"
                src={tvProList.address}
                alt="TVProKor"
              />
              <a className="KorTVProTitle" href="#!">
                {tvProList.title}
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TVProKorSlider;
