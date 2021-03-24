import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO 
          1. class 이름이 far fa-question-circle 인 Font Awesome 아이콘을 넣는 코드를 여기에 작성합니다.
          2. class 이름이 far fa-user 인 Font Awesome 아이콘을 넣는 코드를 여기에 작성합니다.
          3. 각 아이콘을 감싸는 Link 컴포넌트의 to 속성을 이용하여 경로(path)를 연결합니다.
            3-1. Tweets 컴포넌트의 path는 "/"입니다.
            3-2. About 컴포넌트의 path는 "/about" 입니다.
            3-3. Mypage 컴포넌트의 path는 "/mypage" 입니다.
      */}
      {/* <i className="far fa-comment-dots"></i>
      TODO : 어바웃 아이콘과 마이 페이지 아이콘이 있어야 합니다.*/}
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link>
      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
    </section>
  );
};

export default Sidebar;
