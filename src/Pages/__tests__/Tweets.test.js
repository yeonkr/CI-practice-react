import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import Footer from '../../Footer';
import Tweets from '../Tweets';
import Tweet from '../../Components/Tweet';
import { dummyTweets } from '../../static/dummyData';

describe('Tweets.js Components', () => {
  test('Tweets 컴포넌트의 후손 컴포넌트로 Tweet 컴포넌트가 있어야 합니다.', () => {
    const tweetsInstance = TestRenderer.create(<Tweets dummyTweets={[]} />)
      .root;

    expect(tweetsInstance.findAllByType(Tweet)[0].type).toBe(Tweet);
  });

  test('Tweets 컴포넌트의 후손 컴포넌트로 Footer 컴포넌트가 있어야 합니다.', () => {
    const tweetsInstance = TestRenderer.create(<Tweets dummyTweets={[]} />)
      .root;

    expect(tweetsInstance.findByType(Footer).type).toBe(Footer);
  });
});

describe('Tweets 데이터 렌더링 테스트', () => {
  test('dummyTweets의 길이 만큼 트윗이 보여야 합니다.', () => {
    const tweetsInstance = TestRenderer.create(<Tweets dummyTweets={[]} />)
      .root;

    expect(tweetsInstance.findAllByType(Tweet)).toHaveLength(5);

    // const { queryByText } = render(
    //   <Tweets dummyTweets={[]} />
    // );

    // expect(queryByText("kimcoding")).toHaveTextContent(dummyTweets[0].username);
    // expect(queryByText("parkhacker")).toHaveTextContent(
    //   dummyTweets[1].username
    // );
    // expect(queryByText("leedesign")).toHaveTextContent(dummyTweets[2].username);
    // expect(queryByText("songfront")).toHaveTextContent(dummyTweets[3].username);
    // expect(queryByText("choiback")).toHaveTextContent(
    //   dummyTweets[4].username
    // );
  });
});
