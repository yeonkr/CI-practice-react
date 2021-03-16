import React from 'react';
import './Tweets.css';
// TODO - import문을 이용하여 Tweet, Footer 컴포넌트를 불러오세요.

const Tweets = ({ dummyTweets }) => {
  return (
    <React.Fragment>
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
        {/* TODO - Tweet 컴포넌트를 이용하여 dummyTweets에 담긴 트윗을 모두 보여줘야 합니다. */}
      </ul>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
    </React.Fragment>
  );
};

export default Tweets;
