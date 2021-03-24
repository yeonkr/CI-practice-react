import React from 'react';
import './App.css';
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러오세요.
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Sidebar from './Sidebar';
import Footer from './Footer';
// TODO - import문을 이용하여 Mypage, About 컴포넌트를 불러오세요.
import Mypage from "./Pages/Mypage";
import About from "./Pages/About"
import Tweets from './Pages/Tweets';

const App = () => {
  return (
    <React.Fragment>
      {/*TODO - BrowserRouter 컴포넌트를 작성합니다. */}
      <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* TODO - 
                1. Switch와 Route 컴포넌트를 이용하여 경로를 설정하고 Tweets, Mypage, About 컴포넌트를 연결합니다.
                  1-1. Tweets 컴포넌트의 path는 "/" 이며, "/" 이 포함된 다른 경로로 접속이 불가해야 합니다. ex) "/foo"
                  1-2. About 컴포넌트의 path는 "/about" 입니다.
                  1-3. Mypage 컴포넌트의 path는 "/mypage" 입니다.
                2. Mypage 컴포넌트에는 dummyTweets가 props로 전달되어야 합니다.
             */}
             <Switch>
               <Route path="/mypage">
                 <Mypage />
               </Route>
               <Route path="/about">
                 <About />
               </Route>
               <Route path="/">
               <Tweets />
               </Route>
             </Switch>
          </section>
        </main>
      </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Footer };
