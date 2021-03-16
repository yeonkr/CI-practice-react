import React from 'react';
import './Tweets.css';
// TODO - import 구문을 이용하여 Tweet 과 Footer 컴포넌트를 불러오세요.

const Tweets = ({ dummyTweets }) => {
  return (
    <>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <div className="tweetForm__input">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + dummyTweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit"></div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {/* TODO
            1. Tweet 컴포넌트를 이용하여 dummyTweets에 담긴 트윗 정보를 모두 렌더링 할 수 있어야 합니다. 
            //! 아래처럼 알려줘도 될지 아니면 위와 같이 적어둘지 고민
            2. Tweet 컴포넌트에 props는 tweet={tweet} 의 형태로 넣습니다.
            3. Tweet 컴포넌트에 key는 tweet.id 를 넣습니다.
        */}
      </ul>
      {/* TODO - 이곳에 Footer 컴포넌트가 위치해야합니다. */}
    </>
  );
};

export default Tweets;
