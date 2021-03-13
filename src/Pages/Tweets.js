import React from 'react';
import Tweet from '../Components/Tweet';
import './Tweets.css';

const Tweets = ({ dummyTweets }) => {
  return (
    <>
      <ul className="tweets">
        {dummyTweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })}
      </ul>
    </>
  );
};

export default Tweets;
