import React from 'react';
import './App.css';

const App = (props) => {
  const { dummyTweets } = props;

  return (
    <div className="App">
      <main>
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="sidebar">
          <i className={'far fa-comment-dots'}></i>
        </section>
=======
        {/* TODO : Sidebar React Element를 여기에 작성하세요.
         하단에 Siderbar React Element가 이미 선언되어 있습니다. */}
>>>>>>> abfaba0... fix App.js
=======
        {/* TODO : Sidebar React Element를 여기에 작성하세요.
         하단에 Siderbar React Element가 이미 선언되어 있습니다. */}
>>>>>>> master
        <section className="features">
          <div className="tweetForm__container">
            <div className="tweetForm__wrapper">
              <div className="tweetForm__profile">
                <img src="codestates-symbol-logo-192.png"></img>
              </div>
              <div className="tweetForm__input">
                <div className="tweetForm__inputWrapper">
                  <textarea
                    className="tweetForm__textarea"
                    placeholder="Your tweet here."
                    autoFocus
                  ></textarea>
                  <div className="tweetForm__count" role="status">
                    <span className="tweetForm__count__text">
                      {'total: ' + dummyTweets.length}
                    </span>
                  </div>
                </div>
                <div className="tweetForm__submit">
                  <div className="tweetForm__submitIcons"></div>
                  <button className="tweetForm__submitButton">트윗</button>
                </div>
              </div>
            </div>
          </div>
          <ul className="tweets">
            {dummyTweets.map((tweet) => {
              const parsedDate = new Date(tweet.createdAt).toLocaleDateString(
                'ko-KR'
              );
              return (
                <li className="tweet" key={tweet.id}>
                  <div className="tweet__profile">
                    <img src={tweet.picture} />
                  </div>
                  <div className="tweet__content">
                    <div className="tweet__userInfo">
                      <span className="tweet__username">{tweet.username}</span>
                      <span className="tweet__createdAt">{parsedDate}</span>
                    </div>
                    <div className="tweet__message">{tweet.content}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* TODO : Footer React Element를 
         하단에 Siderbar React Element가 이미 선언되어 있습니다. */}
>>>>>>> abfaba0... fix App.js
=======
        {/* TODO : Footer React Element를 
         하단에 Siderbar React Element가 이미 선언되어 있습니다. */}
>>>>>>> master
      </main>
    </div>
  );
};

export default App;

const Sidebar = () => {
  return (
    <section className="sidebar">
      put icon here
      {/* TODO : class 이름이 far fa-comment-dots인 Font Awesome 아이콘을 넣어야 합니다. */}
    </section>
  )
}

const Footer = () => {
  return <footer>Copyright @ 2021 Code States</footer>
}
