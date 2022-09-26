import React from "react";
import "../style/Page01.css";
import HeadMovieSlider from "./HeadMovieSlider";

const Page01 = () => {
  return (
    <section>
      <nav className="Page01Nav">
        <div className="movie1fixed">
          <div className="HeadImg">
            <HeadMovieSlider />
          </div>
          <div className="movie1textmain">
            <h1 className="movie1Maintext">공조2: 인터내셔날</h1>
            <p className="movie1subtext">
              공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄
              조직을 잡기 위해 새로운 공조 수사에 투입된 북한 형사
              ‘림철령’(현빈). 수사 중의 실수로 사이버수사대로 전출됐던 남한 형사
              ‘강진태’(유해진)는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의
              파트너를 자청한다
            </p>
            <br />
            <br />
            <div className="movie1videomain">
              <iframe
                className="movie1video"
                width="320px"
                height="auto"
                src="https://www.youtube.com/embed/fzUKUfHeIYA"
                title="3배 더 강력해진 하나의 팀! [공조2: 인터내셔날] 메인 예고편"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <a
                className="movie1videotext"
                href="https://youtu.be/fzUKUfHeIYA"
              >
                예고편 보러가기
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Page01;
