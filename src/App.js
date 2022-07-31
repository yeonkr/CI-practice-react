import React from 'react';
import './App.css';
import './global-style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
              <Routes>
                <Route path="/" element={<Tweets />} />
                <Route path="/about" element={<About />} />
                <Route path="/mypage" element={<MyPage />} />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
