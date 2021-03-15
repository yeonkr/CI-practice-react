import React from 'react';
// react-router-dom
//TODO - react-router-dom을 설치 후, BrowserRouter, Route, Switch 컴포넌트를 가져오세요.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Route Pages - Sidebar, Footer, Mypage, Notifications, Features
import Sidebar from './Sidebar';
import Footer from './Footer';
// import Features from './Features';
//TODO - Mypage와 Notifications 컴포넌트를 import 구문으로 가져오세요.
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
              {/* 
            //TODO 1 - Route 를 이용하여 경로를 설정하고 mypage와 notification 컴포넌트를 연결해주세요.
            //TODO 2 - Mypage 컴포넌트에는 dummyTweets 가 전달되어야합니다.
            //TODO 3 - Notifications 컴포넌트에는 dummyNotis가 전달되어야합니다.
             */}
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
