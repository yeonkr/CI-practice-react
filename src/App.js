import React from 'react';
// react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Route Pages - Sidebar, Footer, Mypage, Notifications, Features
import Sidebar from './Sidebar';
import Footer from './Footer';
// import Features from './Features';
import Tweets from './Pages/Tweets';
import Mypage from './Pages/Mypage';
import Notifications from './Pages/Notifications';

import './App.css';

const App = (props) => {
  const { dummyTweets, dummyNotis } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Switch>
              <Route path="/mypage">
                <Mypage dummyTweets={dummyTweets} />
              </Route>
              <Route path="/notification">
                <Notifications dummyNotis={dummyNotis} />
              </Route>
              <Route exact path="/">
                <Tweets dummyTweets={dummyTweets} />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Footer };
