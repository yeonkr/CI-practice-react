import React from 'react';
import './App.css';

const App = (props) => {
  const { dummyTweets } = props;

  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features dummyTweets={dummyTweets} />
      </main>
    </div>
  );
};

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

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
      <ul className="tweets">
        {dummyTweets.map((tweet) => {
          const parsedDate = new Date(tweet.createdAt).toLocaleDateString(
            'ko-KR'
          );

          const isParkHacker = tweet.username === 'parkhacker';
          const tweetUserNameClass = isParkHacker
            ? 'tweet__username tweet__username--purple'
            : 'tweet__username';

          return (
            <li className="tweet" key={tweet.id}>
              <div className="tweet__profile">
                <img src={tweet.picture} />
              </div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className={tweetUserNameClass}>{tweet.username}</span>
                  <span className="tweet__createdAt">{parsedDate}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <Footer />
    </section>
  );
};

const Footer = () => {
  return <footer>Copyright @ 2021 Code States</footer>;
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Features, Footer };
