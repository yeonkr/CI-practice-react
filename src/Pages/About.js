import React from 'react';
// TODO - import문을 이용하여 Footer 컴포넌트를 불러오세요.
import './About.css';

const About = (props) => {
  return (
    <section className="aboutTwittler">
      <div className="aboutTwittler__container">
        <div className="aboutTwittler__wrapper">
          <div className="aboutTwittler__detail">
            <p className="aboutTwittler__detailName">React Twittler Info</p>
          </div>
        </div>
      </div>
      <div className="aboutTwittler__content">
        <i className="fas fa-users"></i>
        <p>나만의 Twittler 소개페이지를 꾸며보세요.</p>
      </div>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
      TODO : Footer 컴포넌트를 작성합니다. 
    </section>
  );
};

export default About;
