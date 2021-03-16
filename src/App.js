import React from 'react';
import './App.css';
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러오세요.

import Sidebar from './Sidebar';
import Footer from './Footer';
// TODO - import문을 이용하여 Mypage, Notifications 컴포넌트를 불러오세요.
import Tweets from './Pages/Tweets';

const App = (props) => {
  const { dummyTweets, dummyNotis } = props;

  return (
    <React.Fragment>
      {/*TODO - BrowserRouter 컴포넌트를 작성합니다. */}
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* TODO - 
                1. Switch와 Route 컴포넌트를 이용하여 경로를 설정하고 Tweets, Mypage, Notifications 컴포넌트를 연결합니다.
                  1-1. Tweets 컴포넌트의 path는 "/" 이며, "/" 이 포함된 다른 경로로 접속이 불가해야 합니다. ex) "/foo"
                  1-2. Notifications 컴포넌트의 path는 "/notification" 입니다.
                  1-3. Mypage 컴포넌트의 path는 "/mypage" 입니다.
                2. Mypage 컴포넌트에는 dummyTweets가 props로 전달되어야 합니다.
                3. Notifications 컴포넌트에는 dummyNotis가 props로 전달되어야 합니다.
             */}
            <Tweets dummyTweets={dummyTweets} />
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Footer };
