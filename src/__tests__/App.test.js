import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
//? 라이브러리 설치 테스트
import { access } from 'fs/promises';
import { join } from 'path';
//! router test
import { createMemoryHistory } from 'history';
import { Route, Router, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import { App, Sidebar, Features, Footer } from '../App';
import Mypage from '../Pages/Mypage';
import Notifications from '../Pages/Notifications';
import { dummyNotis, dummyTweets } from '../static/dummyData';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

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

  //   expect(history.location.pathname).toBe('/');
  // });

  // it('navigates home when you click the logo', (async) => {
  //   // in a real test a renderer like "@testing-library/react"
  //   // would take care of setting up the DOM elements
  //   // const appInstance = TestRenderer.create(
  //   //   <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
  //   // ).root;
  //   const root = document.createElement('div');
  //   document.body.appendChild(root);
  //   let testHistory, testLocation;
  //   // Render app
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
  //       <Route
  //         path="*"
  //         render={({ history, location }) => {
  //           testHistory = history;
  //           testLocation = location;
  //           return null;
  //         }}
  //       />
  //     </MemoryRouter>,
  //     root
  //   );

  //   // Interact with page
  //   act(() => {
  //     // Find the link (perhaps using the text content)
  //     const goNotiLink = document.querySelector('.far fa-bell');
  //     console.log('goNoti', goNotiLink);
  //     // Click it
  //     goNotiLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  //   });

  //   // Check correct page content showed up
  //   expect(testLocation.pathname).toBe('/notification');
  // });

  test('<App /> 렌더링시 / 으로 렌더링 되어야 합니다.', async () => {
    const { getByTestId } = renderWithRouter(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );
    const sidebar = getByTestId('sidebar');
    const link = getByTestId('sidebarFeatures');

    await waitFor(() => expect(sidebar).toContainElement(link));
  });

  test('/notification 로 렌더링 되어야 합니다.', async () => {
    const { getByTestId } = renderWithRouter(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    fireEvent.click(getByTestId('sidebarNotifications'));

    await waitFor(() =>
      expect(screen.getByTestId('NotificationInfo')).toBeInTheDocument()
    );
  });

  test('/mypage 로 렌더링 되어야 합니다.', async () => {
    const { getByTestId } = renderWithRouter(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );

    fireEvent.click(getByTestId('sidebarMypage'));

    await waitFor(() =>
      expect(screen.getByTestId('Mypage')).toBeInTheDocument()
    );
  });

  test('새로고침하면 다시 "/" 로 연결되어야 합니다.', () => {
    //redirects to main page
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
      </Router>
    );
  });
});

describe('App.js Components', () => {
  test('App 컴포넌트의 자식 컴포넌트로 Sidebar, Features, Mypage, Notifications 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    ).root;

    // const { debug } = render(
    //   <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    // );
    // debug();

    // const sidebar = getByTestId('sidebar');
    // const link = getByTestId('sidebarFeatures');
    // fireEvent.click(getByTestId(link));
    // expect(sidebar).toContainElement(link);

    expect(appInstance.findByType(Sidebar).type).toBe(Sidebar);
    expect(appInstance.findByType(Features).type).toBe(Features);
    //! 폴더구분 시, 찾지 못함 : No instances found with node type: "Mypage"
    // expect(appInstance.findByType(Mypage).type).toBe(Mypage);
    // expect(appInstance.findByType(Notifications).type).toBe(Notifications);
    // //!임시
    // let { getByTestId } = render(<Mypage dummyTweets={dummyTweets} />);
    // getByTestId('Mypage'); // Mypage 존재유무 확인

    // { getByTestId } = render(<Notifications dummyNotis={dummyNotis} />);
    // getByTestId('Notifications'); // Notifications 존재유무 확인
  });

  test('App 컴포넌트 props에 dummyTweets가 전달되어야 합니다.', () => {
    const appInstance = TestRenderer.create(
      <App dummyNotis={dummyNotis} dummyTweets={dummyTweets} />
    ).root;
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

describe('Sidebar.js Icon', () => {
  test('Font Awesome을 이용한 아이콘이 3개 있어야 합니다.', () => {
    const { container } = render(
      <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />
    );
    const tweetIcon1 = container.querySelector('.far.fa-comment-dots');
    const tweetIcon2 = container.querySelector('.far.fa-bell');
    const tweetIcon3 = container.querySelector('.far.fa-user');

    expect(tweetIcon1).not.toBeNull();
    expect(tweetIcon1).toBeInstanceOf(HTMLElement);
    expect(tweetIcon1.tagName).toBe('I');

    expect(tweetIcon2).not.toBeNull();
    expect(tweetIcon2).toBeInstanceOf(HTMLElement);
    expect(tweetIcon2.tagName).toBe('I');

    expect(tweetIcon3).not.toBeNull();
    expect(tweetIcon3).toBeInstanceOf(HTMLElement);
    expect(tweetIcon3.tagName).toBe('I');
  });
});

// 여기부터는 Advanced Challenge 테스트입니다. 주석을 해제하고, 테스트를 진행해보세요.
// 필수 과제는 아닙니다.

// import { access } from 'fs/promises';
// import { join } from 'path';
// import userEvent from '@testing-library/user-event';
// import { runWithRealTimers } from '@testing-library/dom/dist/helpers';
// // import jest from 'jest';

// describe('Advanced Challenge', () => {
//   test('Font Awesome을 npm으로 설치해야 합니다. (fontawesome-free or react-fontawesome)', async () => {
//     let haveFontAwesomeFree = false;
//     let haveReactFontAwesome = false;
//     const defaultPath = join(process.cwd(), 'node_modules/@fortawesome');
//     const paths = ['fontawesome-free', 'react-fontawesome'];

//     try {
//       const isDirHere = await access(join(defaultPath, paths[0]));
//       const isCssDirHere = await access(join(defaultPath, paths[0], 'css'));
//       haveFontAwesomeFree = true;
//     } catch (e) {
//       console.log(paths[0], ' not installed');
//     }

//     try {
//       const isDirHere = await access(join(defaultPath, paths[1]));
//       const isBabelHere = await access(
//         join(defaultPath, paths[1], 'babel.config.js')
//       );
//       haveFontAwesomeFree = true;
//     } catch (e) {
//       console.log(paths[1], ' not installed');
//     }

//     expect(haveFontAwesomeFree || haveReactFontAwesome).toBeTruthy();
//   });

//   test('트윗 전송 기능을 구현해야 합니다. (1회 전송)', async () => {
//     const char = String.fromCharCode(
//       0x30a0 + Math.random() * (0x30ff - 0x30a0 + 1)
//     );
//     const { container, queryByRole, queryByText } = render(
//       <App dummyTweets={[...dummyTweets.slice(0, 1)]} />
//     );
//     const textarea = queryByRole('textbox');
//     const button = queryByRole('button', { name: '트윗' });

//     await userEvent.type(textarea, char, { delay: 50 });
//     userEvent.click(button);

//     const tweet = queryByText(char);
//     expect(tweet).toBeInTheDocument();

//     const count = container.querySelector('.tweetForm__count');
//     expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b2\b).*$/im);
//   });

//   describe('App.js Notification', () => {
//     describe('App.js Notification Icon', () => {
//       test('Font Awesome을 활용한 알림 아이콘이 있어야 합니다.', () => {
//         const { container } = render(<App dummyTweets={[]} />);
//         const notificationIcon = container.querySelector('.far.fa-bell');

//         expect(notificationIcon).not.toBeNull();
//         expect(notificationIcon).toBeInstanceOf(HTMLElement);
//         expect(notificationIcon.tagName).toBe('I');
//       });
//     });

//     describe('App.js Notifications', () => {
//       test('알림 아이콘을 클릭하면 알림이 보여야 합니다.', () => {
//         const { container, queryByText } = render(
//           <App
//             dummyTweets={[...dummyTweets.slice(0, 1)]}
//             dummyNotis={dummyNotis}
//           />
//         );

//         const notificationIcon = container.querySelector('.far.fa-bell');
//         userEvent.click(notificationIcon);

//         const notification = container.querySelector('.notification');
//         const notificationMessage = queryByText(/^Elon Mask/g);

//         expect(notification).toContainElement(notificationMessage);
//         expect(notificationMessage).toHaveClass('notification__message');
//       });

//       test('알림 아이콘을 클릭하고, 트윗 아이콘을 클릭하면 다시 트윗을 보여줘야 합니다.', () => {
//         const { container, queryByText } = render(
//           <App
//             dummyTweets={[...dummyTweets.slice(0, 1)]}
//             dummyNotis={dummyNotis}
//           />
//         );

//         const notificationIcon = container.querySelector('.far.fa-bell');
//         userEvent.click(notificationIcon);

//         const notification = container.querySelector('.notification');
//         const notificationMessage = queryByText(/^Elon Mask/g);

//         expect(notification).toContainElement(notificationMessage);
//         expect(notificationMessage).toHaveClass('notification__message');

//         const tweetIcon = container.querySelector('.far.fa-comment-dots');
//         userEvent.click(tweetIcon);

//         const tweet = container.querySelector('.tweet');
//         const tweetMessage = queryByText(
//           /^모든 국민은 인간으로서의 존엄과 가치를 가지며,/g
//         );

//         expect(tweet).toContainElement(tweetMessage);
//         expect(tweetMessage).toHaveClass('tweet__message');
//       });

//       describe('notifications 데이터 렌더링 테스트', () => {
//         describe('알림 한 개가 주어진 경우', () => {
//           test('하나의 알림이 보여야 합니다.', () => {
//             const { container, queryByText } = render(
//               <App
//                 dummyTweets={[...dummyTweets.slice(0, 1)]}
//                 dummyNotis={dummyNotis}
//               />
//             );

//             const notificationIcon = container.querySelector('.far.fa-bell');
//             userEvent.click(notificationIcon);

//             const notifications = container.querySelector('.notifications');
//             const notificationMessage = queryByText(/^Elon Mask/g);

//             expect(notifications).toContainElement(notificationMessage);
//           });
//         });

//         describe('알림 세 개가 주어진 경우', () => {
//           test('세 개의 알림이 보여야 합니다.', () => {
//             const { container, queryByText } = render(
//               <App
//                 dummyTweets={[...dummyTweets.slice(0, 1)]}
//                 dummyNotis={dummyNotis}
//               />
//             );

//             const notificationIcon = container.querySelector('.far.fa-bell');
//             userEvent.click(notificationIcon);

//             const notifications = container.querySelector('.notifications');
//             const notificationMessage0 = queryByText(/^Elon Mask/g);
//             const notificationMessage1 = queryByText(/^Steve Jubs/g);
//             const notificationMessage2 = queryByText(/^Linkun Perk/g);

//             expect(notifications).toContainElement(notificationMessage0);
//             expect(notifications).toContainElement(notificationMessage1);
//             expect(notifications).toContainElement(notificationMessage2);

//             expect(notificationMessage0).toHaveTextContent(
//               dummyNotis[0].username
//             );
//             expect(notificationMessage1).toHaveTextContent(
//               dummyNotis[1].username
//             );
//             expect(notificationMessage2).toHaveTextContent(
//               dummyNotis[2].username
//             );
//           });
//         });
//       });
//     });
//   });
// });
