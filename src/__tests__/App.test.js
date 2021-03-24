import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
import { access } from 'fs/promises';
import { join } from 'path';

import App from '../App';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Tweets from '../Pages/Tweets';
import Mypage from '../Pages/Mypage';
import About from '../Pages/About';

let ReactRouterDom;

describe('App.js React Router 설치', () => {
  test('react-router-dom 를 npm 으로 설치해야 합니다. (react-router-dom)', async () => {
    let isReactRouterDomInstalled = false;
    const defaultPath = join(process.cwd(), 'node_modules', 'react-router-dom');

    try {
      await access(join(defaultPath));
      ReactRouterDom = await import('react-router-dom');
      isReactRouterDomInstalled = true;
    } catch (e) {
      console.log('react-router-dom is not installed');
    }

    expect(isReactRouterDomInstalled).toBe(true);
  });
});

describe('App.js React Router 컴포넌트 적용', () => {
  test('React Router 컴포넌트로 Switch와 Route 컴포넌트가 있어야 합니다.', () => {
    const { Switch, Route } = ReactRouterDom;
    const appInstance = TestRenderer.create(<App />).root;

    expect(appInstance.findByType(Switch).type).toBe(Switch);
    expect(appInstance.findByType(Route).type).toBe(Route);
  });

  test('App 컴포넌트의 후손 컴포넌트로 Sidebar 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App />).root;
    expect(appInstance.findByType(Sidebar).type).toBe(Sidebar);
  });

  describe('주소에 따른 페이지 뷰 구현을 위해', () => {
    test('Route path가 "/" 인 Tweets 컴포넌트가 있어야 합니다.', () => {
      const { Switch } = ReactRouterDom;
      const rootPath = '/';
      const appInstance = TestRenderer.create(<App />).root;

      expect(appInstance.findByType(Switch).props.children[0].props.path).toBe(
        rootPath
      );
      expect(
        appInstance.findByType(Switch).props.children[0].props.children.type
      ).toBe(Tweets);
    });

    test('Route path가 "/about" 인 About 컴포넌트가 있어야 합니다.', () => {
      const { Switch } = ReactRouterDom;
      const aboutPath = '/about';
      const appInstance = TestRenderer.create(<App />).root;

      expect(appInstance.findByType(Switch).props.children[1].props.path).toBe(
        aboutPath
      );
      expect(
        appInstance.findByType(Switch).props.children[1].props.children.type
      ).toBe(About);
    });

    test('Route path가 "/mypage" 인 Mypage 컴포넌트가 있어야 합니다.', () => {
      const { Switch } = ReactRouterDom;
      const mypagePath = '/mypage';
      const appInstance = TestRenderer.create(<App />).root;

      expect(appInstance.findByType(Switch).props.children[2].props.path).toBe(
        mypagePath
      );
      expect(
        appInstance.findByType(Switch).props.children[2].props.children.type
      ).toBe(Mypage);
    });
  });
});

describe('Sidebar.js 사이드바 구현', () => {
  test('Font Awesome을 이용한 Tweets 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-comment-dots")', () => {
    const { container } = render(<App />);
    const commentIcon = container.querySelector('.far.fa-comment-dots');

    expect(commentIcon).not.toBeNull();
    expect(commentIcon).toBeInstanceOf(HTMLElement);
    expect(commentIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 About 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-question-circle")', () => {
    const { container } = render(<App />);
    const aboutIcon = container.querySelector('.far.fa-question-circle');

    expect(aboutIcon).not.toBeNull();
    expect(aboutIcon).toBeInstanceOf(HTMLElement);
    expect(aboutIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 Mypage 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-user")', () => {
    const { container } = render(<App />);
    const mypageIcon = container.querySelector('.far.fa-user');

    expect(mypageIcon).not.toBeNull();
    expect(mypageIcon).toBeInstanceOf(HTMLElement);
    expect(mypageIcon.tagName).toBe('I');
  });

  describe('Sidebar 컴포넌트에는', () => {
    test('React Router의 Link 컴포넌트가 3개 있어야 합니다.', () => {
      const { BrowserRouter, Link } = ReactRouterDom;

      const sidebarInstance = TestRenderer.create(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      ).root;

      expect(sidebarInstance.findAllByType(Link)).toHaveLength(3);
    });

    test('Tweets 아이콘의 Link 컴포넌트는 "/" 로 연결되야 합니다.', () => {
      const { container } = render(<App />);
      const linkToAttr = container.querySelectorAll('a');

      expect(linkToAttr[0]).toHaveAttribute('href', '/');
    });

    test('About 아이콘의 Link 컴포넌트는 "/about" 로 연결되야 합니다.', () => {
      const { container } = render(<App />);
      const linkToAttr = container.querySelectorAll('a');

      expect(linkToAttr[1]).toHaveAttribute('href', '/about');
    });

    test('Mypage 아이콘의 Link 컴포넌트는 "/mypage" 로 연결되야 합니다.', () => {
      const { container } = render(<App />);
      const linkToAttr = container.querySelectorAll('a');

      expect(linkToAttr[2]).toHaveAttribute('href', '/mypage');
    });
  });
});

describe('React Router로 SPA 구현하기', () => {
  test('처음 접속 시, URL path가 "/" 이여야 합니다.', async () => {
    const { Route } = ReactRouterDom;

    const rootPath = '/';
    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.exact).toBe(true);
    expect(routeInstance.findByType(Route).props.path).toBe(rootPath);
    expect(location.pathname).toBe(rootPath);
  });

  test('About 메뉴를 누르면 URL path가 /about으로 라우트 되어야 합니다.', async () => {
    const { Route } = ReactRouterDom;

    const aboutPath = '/about';
    const { container } = render(<App />);

    const aboutIcon = container.querySelector('.far.fa-question-circle');
    userEvent.click(aboutIcon);

    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.path).toBe(aboutPath);
    expect(location.pathname).toBe(aboutPath);
  });

  test('Mypage 메뉴를 누르면 URL path가 /mypage로 라우트 되어야 합니다.', async () => {
    const { Route } = ReactRouterDom;

    const myPagePath = '/mypage';
    const { container } = render(<App />);

    const mypageIcon = container.querySelector('.far.fa-user');
    userEvent.click(mypageIcon);

    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.path).toBe(myPagePath);
    expect(location.pathname).toBe(myPagePath);
  });
});
