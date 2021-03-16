import React from 'react';
// TODO - import문을 이용하여 Tweet, Footer 컴포넌트를 불러오세요.
import './Mypage.css';

const Mypage = ({ dummyTweets }) => {
  const filteredTweets = dummyTweets; // TODO - filter 메소드를 이용하여 username이 kimcoding인 요소만 있는 배열을 filteredTweet에 할당합니다.

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {/* TODO - Tweet 컴포넌트를 이용하여 filteredTweets에 담긴 트윗 정보를 보여줄 수 있어야 합니다. */}
      </ul>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
    </section>
  );
};

export default Mypage;
