import React from 'react';
import './App.css';
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러오세요.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
// TODO - import문을 이용하여 Mypage, About 컴포넌트를 불러오세요.
import Mypage from './Pages/Mypage';
import About from './Pages/About';
import Tweets from './Pages/Tweets';

const App = () => {
  return (
    <React.Fragment>
      {/* TODO - BrowserRouter 컴포넌트를 작성합니다. */}
      <BrowserRouter>
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
              {/* TODO - Switch와 Route 컴포넌트를 이용하여 경로(path)를 설정하고 Tweets, Mypage, About 컴포넌트를 연결합니다. */}
              <Switch>
                <Route exact path="/">
                  <Tweets />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/mypage">
                  <Mypage />
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
export default App;
