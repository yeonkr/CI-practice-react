import React from 'react';
import Footer from '../Footer';
import Tweets from './Tweets';
import './Mypage.css';

const Mypage = (props) => {
  // const { dummyTweets } = props;

  // const filterKimCoding = dummyTweets.filter(
  //   (tweet) => tweet.username === 'kimcoding'
  // );

  const filterKimCoding = [
    {
      id: 1,
      username: 'kimcoding',
      picture: `https://randomuser.me/api/portraits/women/1.jpg`,
      title:
        '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
      content:
        '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
      createdAt: '2019-02-24T16:17:47.000Z',
      updatedAt: '2019-02-24T16:17:47.000Z',
    },
  ];

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
//Todo - Advanced : filter 함수를 이용하여 특정 유저의 정보만 담아보세요.
