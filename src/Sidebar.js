import React from 'react';
// TODO - import 구문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러오세요.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
      {/* TODO 
          1. class 이름이 far fa-bell 인 Font Awesome 아이콘을 넣는 코드를 여기에 작성합니다.
          2. class 이름이 far fa-user 인 Font Awesome 아이콘을 넣는 코드를 여기에 작성합니다.
          3. 각 아이콘을 감싸는 Link 컴포넌트를 이용하여 path를 연결합니다.
            3-1.Tweets 컴포넌트의 path는 "/"입니다.
            3-2.Notifications 컴포넌트의 path는 "/notification" 입니다.
            3-3.Mypage 컴포넌트의 path는 "/mypage" 입니다.
      */}
    </section>
  );
};

export default Sidebar;
