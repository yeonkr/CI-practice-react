import React from 'react';
import { Link } from 'react-router-dom';

//TODO 1 - 알림/마이폐이지 아이콘을 이용하여 메뉴를 추가하세요.
//TODO 2 - react-router-dom을 설치 후, Link 컴포넌트를 가져오세요.
//TODO 3 - Link 컴포넌트를 이용하여 경로를 연결하세요.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/notification">
        <i className="far fa-bell"></i>
      </Link>
      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
    </section>
  );
};

export default Sidebar;
