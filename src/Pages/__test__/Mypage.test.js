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
});

describe('Mypage 데이터 렌더링 테스트', () => {
  describe('kimcoding이 작성한 트윗이 한 개인 경우', () => {
    test.todo('한 개의 트윗이 보여야 합니다.');
  });
  describe('kimcoding이 작성한 트윗이 세 개인 경우', () => {
    test.todo('세 개의 트윗이 보여야 합니다.');
  });
});
