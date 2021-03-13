import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../../App';
// import { Mypage, Tweets, Footer } from '../Mypage';
import Mypage from '../Mypage';
import Tweets from '../Tweets';
import { dummyTweets } from '../../static/dummyData';

describe('Mypage.js Components', () => {
  test('Mypage 컴포넌트의 자식 컴포넌트로 Tweets, Footer 컴포넌트가 있어야 합니다.', () => {
    const mypageInstance = TestRenderer.create(
      <Mypage dummyTweets={dummyTweets.slice(0, 1)} />
    ).root;

    expect(mypageInstance.findByType(Tweets).type).toBe(Tweets);
    expect(mypageInstance.findByType(Footer).type).toBe(Footer);
  });

  test('Mypage 컴포넌트에 김코딩 이름이 있어야 합니다.', () => {
    const { container, queryByText } = render(
      <Mypage dummyTweets={dummyTweets.slice(0, 1)} />
    );
    const tweet = container.querySelector('.tweet');
    const username = queryByText('kimcoding');

    expect(tweet).toContainElement(username);
    expect(username).toHaveClass('tweet__username');
  });
});
