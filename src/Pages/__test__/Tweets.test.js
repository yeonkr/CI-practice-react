import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

describe('Tweets.js Components', () => {
  test.todo(
    'Tweets 컴포넌트의 자식 컴포넌트로 Notification, Footer 컴포넌트가 있어야 합니다.'
  );
});

describe('Tweets 데이터 렌더링 테스트', () => {
  describe('트윗 한 개가 주어진 경우', () => {
    test.todo('하나의 트윗이보여야 합니다.');
  });
  describe('트윗 세 개가 주어진 경우', () => {
    test.todo('세 개의 트윗이 보여야 합니다.');
  });
});
