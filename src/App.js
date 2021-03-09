import React from 'react';
import './App.css';

const App = (props) => {
  const { dummyTweets } = props;

  return (
    <div className="App">
      <main>
        {/* TODO : Sidebar React Element를 작성하세요. */}
        <section className="features">
          <div className="tweetForm__container">
            <div className="tweetForm__wrapper">
              <div className="tweetForm__profile">
                img here
                {/* TODO : img 엘리먼트에 트윗 프로필 사진을 넣으세요. */}
              </div>
              <div className="tweetForm__input">
                <div className="tweetForm__inputWrapper">
                  textarea here, count here
                  {/* TODO : 
                  textarea
                  - textarea 엘리먼트를 생성하고, 
                  - class 이름은 tweetForm__textarea로 지정합니다. 
                  - Placeholder가 있어야 합니다.
                  count
                  - div (혹은 원하는 HTML 엘리먼트)를 생성하고
                  - class 이름은 tweetForm__count로 지정합니다.
                  - props dummyTweet로 전달되는 데이터의 갯수를 보여줘야 합니다.
                    - ex) total : 5
                    - total과 숫자가 텍스트 컨텐츠에 포함되어 있어야 합니다.
                  */}
                </div>
                <div className="tweetForm__submit">
                  <div className="tweetForm__submitIcons"></div>
                  {/* TODO : 
                  button
                  - button 엘리먼트를 생성하고
                  - class 이름은 tweetForm__submitButton으로 지정합니다.
                  */}
                  button here
                </div>
              </div>
            </div>
          </div>
          <ul className="tweets">
            tweets here
            {/* TODO : 
            li
            - dummyTweets에 담긴 트윗 정보를 모두 렌더링 할 수 있어야 합니다.
            - dummyTweets의 길이 변화에 따라서 렌더링되는 트윗 수가 변해야 합니다.
            - li 엘리먼트를 트윗 수에 맞게 생성하고
            - class 이름은 tweet으로 지정합니다.
              img
              - li#tweet 엘리먼트의 후손 엘리먼트로 img 엘리먼트를 생성하고
              - dummyTweets의 이미지 주소 정보를 찾아서 src 속성으로 지정합니다.
              tweet content
                - 아래 엘리먼트를 감쌀(wrap) 엘리먼트를 생성합니다.
                - class 이름은 tweet__content으로 지정합니다.
                username
                - li#tweet 엘리먼트의 후손 엘리먼트로 span 엘리먼트를 생성하고
                - dummyTweets의 유져 이름을 span의 텍스트 컨텐츠로 넣습니다.
                - class 이름은 tweet__username으로 지정합니다.
                createdAt
                - li#tweet 엘리먼트의 후손 엘리먼트로 span 엘리먼트를 생성하고
                - dummyTweets의 트윗 생성 일자를 span의 텍스트 컨텐츠로 넣습니다.
                - class 이름은 tweet__createdAt으로 지정합니다.
                - 트윗 생성 일자는 yyyy. mm. dd. 형식으로 표시되어야 합니다.
                - Date 객체와 toLocaleDateString 메소드를 사용을 권장합니다.
                tweet message
                - li#tweet 엘리먼트의 후손 엘리먼트로 div 엘리먼트를 생성하고
                - dummyTweets의 트윗 내용을 div의 텍스트 컨텐츠로 넣습니다.
                - class 이름은 tweet__message으로 지정합니다.
            */}
          </ul>
        </section>
        {/* TODO : Footer React Element를 여기에 작성하세요 */}
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
