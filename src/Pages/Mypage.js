import React from 'react';
import Footer from '../Footer';
import Tweets from './Tweets';
import './Mypage.css';

const Mypage = (props) => {
  const { dummyTweets } = props;

  const filterKimCoding = dummyTweets.filter(
    (tweet) => tweet.username === 'kimcoding'
  );

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filterKimCoding[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filterKimCoding[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <Tweets dummyTweets={filterKimCoding} />
      <Footer />
    </section>
  );
};

export default Mypage;
// export { Mypage, Tweets, Footer };
