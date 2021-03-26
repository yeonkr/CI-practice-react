import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './Tweets.css';
// ! 위 코드는 수정하지 않습니다.

// TODO - import문을 이용하여 Tweet, Footer 컴포넌트를 불러오세요.
import Tweet from '../Components/Tweet';
import Footer from '../Footer';

const Tweets = () => {
  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__input">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + dummyTweets.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {/* TODO : 트윗 메세지가 있어야 합니다. */}
        {dummyTweets.map((el) => (
          <Tweet key={el.id} tweet={el} />
        ))}
      </ul>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
