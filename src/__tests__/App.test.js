import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
//? 라이브러리 설치 테스트
import { access } from 'fs/promises';
import { join } from 'path';
//! router test
import { Route } from 'react-router-dom';

import { App, Sidebar, Features, Footer } from '../App';
import Mypage from '../Pages/Mypage';
import Notifications from '../Pages/Notifications';
import { dummyNotis, dummyTweets } from '../static/dummyData';

describe('Sidebar.js Icon', () => {
  test.todo('Font Awesome을 이용한 트윗 아이콘이 있어야 합니다.');

  test('Font Awesome을 이용한 알림 아이콘이 있어야 합니다.', () => {
    const { container } = render(
      // <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
      <App dummyTweets={[]} dummyNotis={[]} />
    );
    const notificationIcon = container.querySelector('.far.fa-bell');

    expect(notificationIcon).not.toBeNull();
    expect(notificationIcon).toBeInstanceOf(HTMLElement);
    expect(notificationIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 마이페이지 아이콘이 있어야 합니다.', () => {
    const { container } = render(<App dummyTweets={[]} dummyNotis={[]} />);
    const mypageIcon = container.querySelector('.far.fa-user');

    expect(mypageIcon).not.toBeNull();
    expect(mypageIcon).toBeInstanceOf(HTMLElement);
    expect(mypageIcon.tagName).toBe('I');
  });
});

describe('App.js Components', () => {
  test('App 컴포넌트의 자식 컴포넌트로 Sidebar, Features, Mypage, Notifications 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    expect(appInstance.findByType(Sidebar).type).toBe(Sidebar);
    expect(appInstance.findByType(Features).type).toBe(Features);

    const { container } = render(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    const mainIcon = container.querySelector('.far.fa-comment-dots');
    const notificationIcon = container.querySelector('.far.fa-bell');
    const mypageIcon = container.querySelector('.far.fa-user');

    userEvent.click(mypageIcon);
    const mypageInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;
    expect(mypageInstance.findByType(Route).props.children.type).toBe(Mypage);

    userEvent.click(notificationIcon);
    const notiInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    expect(notiInstance.findByType(Route).props.children.type).toBe(
      Notifications
    );

    userEvent.click(mainIcon);
  });

  test('App 컴포넌트 props에 dummyTweets가 전달되어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App dummyTweets={dummyTweets} />)
      .root;
    const appInstanceWithThreeTweets = TestRenderer.create(
      <App dummyTweets={dummyTweets.slice(0, 3)} />
    ).root;

    expect(appInstance.props.dummyTweets).toBe(dummyTweets);
    expect(appInstanceWithThreeTweets.props.dummyTweets).toEqual(
      dummyTweets.slice(0, 3)
    );
  });

  test('Features 컴포넌트의 자식 컴포넌트로 Footer 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App dummyTweets={dummyTweets} />)
      .root;

    expect(appInstance.findByType(Footer).type).toBe(Footer);
  });

  test('Features 컴포넌트 props에 dummyTweets가 전달되어야 합니다.', () => {
    const featuresInstance = TestRenderer.create(
      <Features dummyTweets={dummyTweets} />
    ).root;
    const featuresInstanceWithThreeTweets = TestRenderer.create(
      <Features dummyTweets={dummyTweets.slice(0, 3)} />
    ).root;

    expect(featuresInstance.props.dummyTweets).toBe(dummyTweets);
    expect(featuresInstanceWithThreeTweets.props.dummyTweets).toEqual(
      dummyTweets.slice(0, 3)
    );
  });
});

describe('React Router', () => {
  test('react-router-dom 를 npm 으로 설치해야 합니다. (react-router-dom)', async () => {
    let haveReactRouterDom = false;
    const defaultPath = join(process.cwd(), 'node_modules', 'react-router-dom');

    try {
      const isDirHere = await access(join(defaultPath));
      haveReactRouterDom = true;
    } catch (e) {
      console.log('react-router-dom is not installed');
    }

    expect(haveReactRouterDom).toBe(true);
  });

  test('처음 접속 시, "/" 으로 렌더링 되어야 합니다.', async () => {
    const rootPath = '/';
    const routeInstance = TestRenderer.create(
      <App dummyTweets={[]} dummyNotis={[]} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe(rootPath);
    expect(location.pathname).toBe(rootPath);
  });

  test('알림 메뉴를 누르면 /notification 으로 렌더링되어야 합니다.', async () => {
    const notificationPath = '/notification';
    const { container } = render(<App dummyTweets={[]} dummyNotis={[]} />);

    const notificationIcon = container.querySelector('.far.fa-bell');
    userEvent.click(notificationIcon);

    const routeInstance = TestRenderer.create(
      <App dummyTweets={[]} dummyNotis={[]} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe(notificationPath);
    expect(location.pathname).toBe(notificationPath);
  });

  test('마이페이지 메뉴를 누르면 /mypage 로 렌더링 되어야 합니다.', async () => {
    const myPagePath = '/mypage';
    const { container } = render(<App dummyTweets={[]} dummyNotis={[]} />);

    const mypageIcon = container.querySelector('.far.fa-user');
    userEvent.click(mypageIcon);

    const routeInstance = TestRenderer.create(
      <App dummyTweets={[]} dummyNotis={[]} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe(myPagePath);
    expect(location.pathname).toBe(myPagePath);
  });
});
