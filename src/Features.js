import React from 'react';
import Tweets from './Pages/Tweets';
import Footer from './Footer';

const Features = (props) => {
  const { dummyTweets } = props;
  return (
    <section className="features">
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
      <Tweets dummyTweets={dummyTweets} />
      <Footer />
    </section>
  );
};

export default Features;
