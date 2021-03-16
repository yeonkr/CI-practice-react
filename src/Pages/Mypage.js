import React from 'react';
// TODO - import 구문을 이용하여 Tweet 과 Footer 컴포넌트를 불러오세요.
import './Mypage.css';

const Mypage = ({ dummyTweets }) => {
  //TODO - Filter 함수를 이용하여 dummyTweets 의 kimcoding 만 표시하세요.
  const filterKimCoding = [];

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filterKimCoding[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filterKimCoding[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {/* TODO
            1. Tweet 컴포넌트를 이용하여 filterKimCoding 에 담긴 트윗 정보를 모두 렌더링 할 수 있어야 합니다. 
            //! 아래처럼 알려줘도 될지 아니면 위와 같이 적어둘지 고민
            2. Tweet 컴포넌트에 props는 tweet={tweet} 의 형태로 넣습니다.
            3. Tweet 컴포넌트에 key는 tweet.id 를 넣습니다.
        */}
      </ul>
      {/* TODO - 이곳에 Footer 컴포넌트가 위치해야합니다. */}
    </section>
  );
};

export default Mypage;
