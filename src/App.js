import React from 'react';
import './App.css';
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러오세요.

import Sidebar from './Sidebar';
import Footer from './Footer';
// TODO - import 구문을 이용하여 Mypage와 Notifications 컴포넌트를 불러오세요.
import Tweets from './Pages/Tweets';

const App = (props) => {
  const { dummyTweets, dummyNotis } = props;

  return (
    <>
      {/*TODO - 이곳에 BrowserRouter 컴포넌트가 위치합니다. */}
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* 
              TODO
              1.Switch와 Route 컴포넌트를 이용하여 경로를 설정하고 Tweets, Mypage, Notifications 컴포넌트를 연결합니다.
                1-1.Tweets 컴포넌트의 path는 "/" 이며 반드시 exact 를 설정해줘야합니다.
                1-2.Notifications 컴포넌트의 path는 "/notification" 입니다.
                1-3.Mypage 컴포넌트의 path는 "/mypage" 입니다.
              2.Mypage 컴포넌트에는 아래 Tweets처럼 dummyTweets 가 전달되어야합니다.
              3.Notifications 컴포넌트에는 dummyNotis가 전달되어야합니다.
             */}
            <Tweets dummyTweets={dummyTweets} />
          </section>
        </main>
      </div>
    </>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Footer };
