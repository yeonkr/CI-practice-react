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

    //! 폴더구분 시 = route 하면, 찾지 못함 : No instances found with node type: "Mypage"
    // expect(appInstance.findByProps({ className: 'myInfo' }).toBe('myInfo'));
    // expect(appInstance.findByType(Route).props.children.type).toBe(Mypage);
    // expect(appInstance.findByType(Notifications).type).toBe(Notifications);
    // //!임시 - data-id 사용했으나 수강생 입장에서는 추가할 수 없는 속성..
    // let { getByTestId } = render(<Mypage dummyTweets={dummyTweets} />);
    // getByTestId('Mypage'); // Mypage 존재유무 확인

    // { getByTestId } = render(<Notifications dummyNotis={dummyNotis} />);
    // getByTestId('Notifications'); // Notifications 존재유무 확인
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
  test('react-router 를 npm 으로 설치해야 합니다. (react-router-dom)', async () => {
    let haveReactRouterDom = false;
    const defaultPath = join(process.cwd(), 'node_modules/react-router-dom');
    const paths = ['react-router-dom'];

    try {
      // const isDirHere = await access(join(defaultPath, paths[0]));
      //! Paths 가 없어도 되는지...?
      const isDirHere = await access(join(defaultPath));
      haveReactRouterDom = true;
    } catch (e) {
      console.log(paths[0], ' not installed');
    }

    expect(haveReactRouterDom).toBeTruthy();
  });

  test('처음 접속 시, "/" 으로 렌더링 되어야 합니다.', async () => {
    //! Link to "/"에 "/sss" 해도 통과되는 현상이 일어남...why?
    const { container } = render(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    const mainIcon = container.querySelector('.far.fa-comment-dots');
    userEvent.click(mainIcon);

    const routeInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe('/');
    //   expect(history.location.pathname).toBe('/');
  });

  test('알림 메뉴를 누르면 /notification 으로 렌더링되어야 합니다.', async () => {
    const { container } = render(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    const notificationIcon = container.querySelector('.far.fa-bell');
    userEvent.click(notificationIcon);

    const currentPage = container.querySelector('.notificationInfo');
    // console.log('현페이지', currentPage);

    const routeInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe('/notification');
  });

  test('마이페이지 메뉴를 누르면 /mypage 로 렌더링 되어야 합니다.', async () => {
    const { container } = render(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    const mypageIcon = container.querySelector('.far.fa-user');
    userEvent.click(mypageIcon);

    const currentPage = container.querySelector('.myInfo');
    // console.log('현페이지', currentPage);

    const routeInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    expect(routeInstance.findByType(Route).props.path).toBe('/mypage');
  });
});
