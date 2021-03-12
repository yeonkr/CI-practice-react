import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { App, Sidebar, Features, Footer } from '../App';
import { dummyNotis, dummyTweets } from '../static/dummyData';

describe('App.js Icon', () => {
  test('Font Awesome을 활용한 트윗 아이콘이 있어야 합니다.', () => {
    const { container } = render(<App dummyTweets={[]} />);
    const tweetIcon = container.querySelector('.far.fa-comment-dots');

    expect(tweetIcon).not.toBeNull();
    expect(tweetIcon).toBeInstanceOf(HTMLElement);
    expect(tweetIcon.tagName).toBe('I');
  });
});

describe('App.js Components', () => {
  test('App 컴포넌트의 자식 컴포넌트로 Sidebar, Features 컴포넌트가 있어야 합니다.', () => {
    const appInstance = TestRenderer.create(<App dummyTweets={[]} />).root;

    expect(appInstance.findByType(Sidebar).type).toBe(Sidebar);
    expect(appInstance.findByType(Features).type).toBe(Features);
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
    const appInstance = TestRenderer.create(<App dummyTweets={[]} />).root;

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

describe('App.js Count', () => {
  describe('Count 기능 테스트', () => {
    test('트윗 총 갯수를 보여줄 수 있어야 합니다.', () => {
      const { container } = render(<App dummyTweets={[]} />);
      const count = container.querySelector('.tweetForm__count');
      expect(count).not.toBeEmptyDOMElement();
    });

    test('트윗 갯수와 카운트가 일치해야 합니다. (1)', () => {
      const { container } = render(
        <App dummyTweets={dummyTweets.slice(0, 1)} />
      );
      const count = container.querySelector('.tweetForm__count');
      expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b1\b).*$/im);
    });

    test('트윗 갯수와 카운트가 일치해야 합니다. (4)', () => {
      const { container } = render(
        <App dummyTweets={dummyTweets.slice(0, 4)} />
      );
      const count = container.querySelector('.tweetForm__count');
      expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b4\b).*$/im);
    });
  });
});

describe('App.js Tweet', () => {
  describe('Tweet 테스트', () => {
    test('트윗 저자의 프로필 사진이 있어야 합니다.', () => {
      const { container } = render(
        <App dummyTweets={dummyTweets.slice(0, 1)} />
      );
      const tweet = container.querySelector('.tweet');
      const imgs = container.querySelectorAll('img');
      const profileImg = Array.from(imgs).find((img) =>
        img.src.includes('https://randomuser.me/api/portraits')
      );

      expect(tweet).toContainElement(profileImg);
      expect(profileImg).not.toBeNull();
    });

    test('유져 이름이 있어야 합니다.', () => {
      const { container, queryByText } = render(
        <App dummyTweets={dummyTweets.slice(0, 1)} />
      );
      const tweet = container.querySelector('.tweet');
      const username = queryByText('kimcoding');

      expect(tweet).toContainElement(username);
      expect(username).toHaveClass('tweet__username');
    });

    test('트윗 생성 일자(yyyy. mm. dd.) 가 있어야 합니다.', () => {
      const { container, queryByText } = render(
        <App dummyTweets={dummyTweets.slice(0, 1)} />
      );
      const tweet = container.querySelector('.tweet');
      const createdAt = queryByText('2019. 2. 25.');

      expect(tweet).toContainElement(createdAt);
      expect(createdAt).toHaveClass('tweet__createdAt');
    });

    test('트윗 메세지가 있어야 합니다.', () => {
      const { container, queryByText } = render(
        <App dummyTweets={dummyTweets.slice(0, 1)} />
      );
      const tweet = container.querySelector('.tweet');
      const tweetMessage = queryByText(
        /^모든 국민은 인간으로서의 존엄과 가치를 가지며,/g
      );

      expect(tweet).toContainElement(tweetMessage);
      expect(tweetMessage).toHaveClass('tweet__message');
    });
  });

  describe('App.js 데이터 랜더링 테스트', () => {
    describe('트윗 한 개가 주어진 경우', () => {
      test('하나의 트윗이 보여야 합니다.', () => {
        const { queryByText } = render(
          <App dummyTweets={dummyTweets.slice(0, 1)} />
        );

        expect(queryByText('kimcoding')).toHaveTextContent(
          dummyTweets[0].username
        );
        expect(queryByText('parkhacker')).toBe(null);
      });

      test('카운트가 1이여야 합니다.', () => {
        const { container } = render(
          <App dummyTweets={dummyTweets.slice(0, 1)} />
        );
        const count = container.querySelector('.tweetForm__count');
        expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b1\b).*$/im);
      });
    });

    describe('트윗 세 개가 주어진 경우', () => {
      test('세 개의 트윗이 보여야 합니다.', () => {
        const { queryByText } = render(
          <App dummyTweets={dummyTweets.slice(0, 3)} />
        );

        expect(queryByText('kimcoding')).toHaveTextContent(
          dummyTweets[0].username
        );
        expect(queryByText('parkhacker')).toHaveTextContent(
          dummyTweets[1].username
        );
        expect(queryByText('leedesign')).toHaveTextContent(
          dummyTweets[2].username
        );
        expect(queryByText('songfront')).toBe(null);
      });

      test('카운트가 3이여야 합니다.', () => {
        const { container } = render(
          <App dummyTweets={dummyTweets.slice(0, 3)} />
        );
        const count = container.querySelector('.tweetForm__count');
        expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b3\b).*$/im);
      });
    });

    describe('트윗 다섯 개가 주어진 경우', () => {
      test('다섯 개의 트윗이 보여야 합니다.', () => {
        const { queryByText } = render(
          <App dummyTweets={dummyTweets.slice(0, 5)} />
        );

        expect(queryByText('kimcoding')).toHaveTextContent(
          dummyTweets[0].username
        );
        expect(queryByText('parkhacker')).toHaveTextContent(
          dummyTweets[1].username
        );
        expect(queryByText('leedesign')).toHaveTextContent(
          dummyTweets[2].username
        );
        expect(queryByText('songfront')).toHaveTextContent(
          dummyTweets[3].username
        );
        expect(queryByText('choiback')).toHaveTextContent(
          dummyTweets[4].username
        );
      });

      test('카운트가 5이여야 합니다.', () => {
        const { container } = render(
          <App dummyTweets={dummyTweets.slice(0, 5)} />
        );
        const count = container.querySelector('.tweetForm__count');
        expect(count).toHaveTextContent(/^(?=.*\btotal\b)(?=.*\b5\b).*$/im);
      });
    });
  });

  describe('App.js conditional rendering test', () => {
    describe('parkhacker가 작성한 트윗의 경우', () => {
      test('username 배경색이 --point-color-tint-2가 되도록 클레스를 지정해야 합니다.', () => {
        const { queryByText } = render(
          <App dummyTweets={dummyTweets.slice(0, 2)} />
        );

        expect(queryByText('kimcoding')).toHaveTextContent(
          dummyTweets[0].username
        );
        expect(queryByText('parkhacker')).toHaveTextContent(
          dummyTweets[1].username
        );

        expect(queryByText('parkhacker')).toHaveClass(
          'tweet__username--purple'
        );
        expect(queryByText('parkhacker')).toHaveStyle(
          'background-color: var(--point-color-tint-2)'
        );
      });
    });
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
