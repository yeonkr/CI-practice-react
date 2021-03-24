import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
import { access } from 'fs/promises';
import { join } from 'path';

import { App, Sidebar } from '../App';
import Tweets from '../Pages/Tweets';
import Mypage from '../Pages/Mypage';
import About from '../Pages/About';

// class ImportError extends Error {}

//   let ReactRouterDom;
//   try {
//     ReactRouterDom = import('react-router-dom');
//   } catch {
//     console.log(error)
//   }

// const {Router} = ReactRouterDom;
// 위의 경우, 경로에 대한 에러 체크는 가능하나 아래와 같이 컴포넌트들이 꺼내지지 않음...
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';


describe('App.js React Router 설치', () => {
  test('react-router-dom 를 npm 으로 설치해야 합니다. (react-router-dom)', async () => {
    let isReactRouterDomInstalled = false;
    const defaultPath = join(process.cwd(), 'node_modules', 'react-router-dom');

    try {
      await access(join(defaultPath));
      isReactRouterDomInstalled = true;
    } catch (e) {
      console.log('react-router-dom is not installed');
    }

    expect(isReactRouterDomInstalled).toBe(true);
  });
});

describe('App.js React Router 컴포넌트 적용', () => {

  test('React Router 컴포넌트로 Switch와 Route 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App />)
      .root;

    expect(appInstance.findByType(Switch).type).toBe(Switch);
    expect(appInstance.findByType(Route).type).toBe(Route);
  });
  
  test('App 컴포넌트의 자식 컴포넌트로 Sidebar, Tweets, Mypage, About 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App />)
      .root;

    expect(appInstance.findByType(Sidebar).type).toBe(Sidebar);
    expect(appInstance.findByType(Tweets).type).toBe(Tweets);

    const { container } = render(<App />);

    const mainIcon = container.querySelector('.far.fa-comment-dots');
    const aboutIcon = container.querySelector('.far.fa-question-circle');
    const mypageIcon = container.querySelector('.far.fa-user');

    userEvent.click(mypageIcon);
    const mypageInstance = TestRenderer.create(
      <App />
    ).root;
    expect(mypageInstance.findByType(Route).props.children.type).toBe(Mypage);

    userEvent.click(aboutIcon);
    const aboutInstance = TestRenderer.create(<App />)
      .root;

    expect(aboutInstance.findByType(Route).props.children.type).toBe(About);

    userEvent.click(mainIcon);
  });
});


describe('Sidebar.js Icon', () => {
  test('Font Awesome을 이용한 트윗 아이콘이 있어야 합니다.', () => {
    const { container } = render(<App />);
    const commentIcon = container.querySelector('.far.fa-comment-dots');

    expect(commentIcon).not.toBeNull();
    expect(commentIcon).toBeInstanceOf(HTMLElement);
    expect(commentIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 정보 아이콘이 있어야 합니다.', () => {
    const { container } = render(<App />);
    const aboutIcon = container.querySelector('.far.fa-question-circle');

    expect(aboutIcon).not.toBeNull();
    expect(aboutIcon).toBeInstanceOf(HTMLElement);
    expect(aboutIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 마이페이지 아이콘이 있어야 합니다.', () => {
    const { container } = render(<App />);
    const mypageIcon = container.querySelector('.far.fa-user');

    expect(mypageIcon).not.toBeNull();
    expect(mypageIcon).toBeInstanceOf(HTMLElement);
    expect(mypageIcon.tagName).toBe('I');
  });

  test('React Router 컴포넌트로 Link 컴포넌트가 3개 있어야 합니다.', () => {
    const sidebarInstance = TestRenderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>).root;
    
    // expect(sidebarInstance.findByType(Link).type).toBe(Link);
    // 위와 같이 적용했을 경우, 생성된 링크컴포넌트가 3개여서 오류 생성
    expect(sidebarInstance.findAllByType(Link)).toHaveLength(3);
  });
});

describe('React Router', () => {
 

  test('처음 접속 시, URL path가 "/" 이여야 합니다.', async () => {
    const rootPath = '/';
    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.exact).toBe(true);
    expect(routeInstance.findByType(Route).props.path).toBe(rootPath);
    expect(location.pathname).toBe(rootPath);
  });

  test('정보 메뉴를 누르면 URL path가 /about으로 라우트 되어야 합니다.', async () => {
    const aboutPath = '/about';
    const { container } = render(<App />);

    const aboutIcon = container.querySelector('.far.fa-question-circle');
    userEvent.click(aboutIcon);

    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.path).toBe(aboutPath);
    expect(location.pathname).toBe(aboutPath);
  });

  test('마이페이지 메뉴를 누르면 URL path가 /mypage로 라우트 되어야 합니다.', async () => {
    const myPagePath = '/mypage';
    const { container } = render(<App />);

    const mypageIcon = container.querySelector('.far.fa-user');
    userEvent.click(mypageIcon);

    const routeInstance = TestRenderer.create(<App />)
      .root;

    expect(routeInstance.findByType(Route).props.path).toBe(myPagePath);
    expect(location.pathname).toBe(myPagePath);
  });
});
