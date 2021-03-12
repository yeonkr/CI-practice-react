import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const App = (props) => {
  const { dummyTweets, dummyNotis } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          {/* <Features dummyTweets={dummyTweets} /> */}
          <Switch>
            <Route path="/mypage">
              <Mypage dummyTweets={dummyTweets} />
            </Route>
            <Route path="/notification">
              <NotificaitonWrapper dummyNotis={dummyNotis} />
            </Route>
            <Route path="/">
              <Features dummyTweets={dummyTweets} />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

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

//! SPA 추가
const Mypage = (props) => {
  const { dummyTweets } = props;

  const infoKimCoding = dummyTweets.filter(
    (tweet) => tweet.username === 'kimcoding'
  );
  const parsedDate = new Date(infoKimCoding[0].createdAt).toLocaleDateString(
    'ko-KR'
  );

  console.log(infoKimCoding[0]);

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__header">
          <div className="myInfo__profile">
            <img src={infoKimCoding[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {infoKimCoding[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets">
        <li className="tweet" key={infoKimCoding[0].id}>
          <div className="tweet__profile">
            <img src={infoKimCoding[0].picture} />
          </div>
          <div className="tweet__content">
            <div className="tweet__userInfo">
              <span>{infoKimCoding[0].username}</span>
              <span className="tweet__createdAt">{parsedDate}</span>
            </div>
            <div className="tweet__message">{infoKimCoding[0].content}</div>
          </div>
        </li>
      </ul>

      <Footer />
    </section>
  );
};

// ! Notificaiton 관련
const NotificaitonWrapper = ({ dummyNotis }) => {
  return (
    <div className="noti__wrapper">
      <NotificationContainer notifications={dummyNotis} />
      <Notifications notifications={dummyNotis} />
      <Footer />
    </div>
  );
};

const NotificationContainer = () => {
  return (
    <div className="notificationBar__container">
      <NotificationTopBar />
    </div>
  );
};

const NotificationTopBar = () => {
  return (
    <div className="notificationBar__wrapper">
      <div className="notificationBar__icon">
        <i className={'fas fa-calendar-check'}></i>
      </div>
      <div className="notificationBar__message">알림을 확인하세요.</div>
    </div>
  );
};

const Notifications = ({ notifications }) => {
  return (
    <ul className="notifications">
      {notifications.map((notification) => (
        <Notification content={notification.content} key={notification.id} />
      ))}
    </ul>
  );
};

const Notification = ({ content }) => {
  return (
    <li className="notification">
      <div className="notification__sign">
        <i className={'fas fa-caret-right'}></i>
      </div>
      <div className="notification__content">
        <span className="notification__message">{content}</span>
      </div>
    </li>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Features, Footer, Mypage, Notification };
