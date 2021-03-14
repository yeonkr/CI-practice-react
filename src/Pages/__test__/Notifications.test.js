import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../../App';
import Notifications from '../Notifications';
import Notification from '../../Components/Notification';
import { dummyNotis } from '../../static/dummyData';

describe('Notifications.js Components', () => {
  test('Notifications 컴포넌트의 자식 컴포넌트로 Notification, Footer 컴포넌트가 있어야 합니다.', () => {
    const notiInstance = TestRenderer.create(
      <Notifications dummyNotis={dummyNotis.slice(0, 1)} />
    ).root;

    expect(notiInstance.findByType(Notification).type).toBe(Notification);
    expect(notiInstance.findByType(Footer).type).toBe(Footer);
  });
});

describe('notifications 데이터 렌더링 테스트', () => {
  describe('알림 한 개가 주어진 경우', () => {
    test('하나의 알림이 보여야 합니다.', () => {
      const { container, queryByText } = render(
        <Notifications dummyNotis={dummyNotis.slice(0, 1)} />
      );

      const notifications = container.querySelector('.notifications');
      const notificationMessage = queryByText(/^Elon Mask/g);

      expect(notifications).toContainElement(notificationMessage);
    });
  });
  describe('알림 세 개가 주어진 경우', () => {
    test('세 개의 알림이 보여야 합니다.', () => {
      const { container, queryByText } = render(
        <Notifications dummyNotis={dummyNotis} />
      );

      const notifications = container.querySelector('.notifications');
      const notificationMessage0 = queryByText(/^Elon Mask/g);
      const notificationMessage1 = queryByText(/^Steve Jubs/g);
      const notificationMessage2 = queryByText(/^Linkun Perk/g);

      expect(notifications).toContainElement(notificationMessage0);
      expect(notifications).toContainElement(notificationMessage1);
      expect(notifications).toContainElement(notificationMessage2);

      expect(notificationMessage0).toHaveTextContent(dummyNotis[0].username);
      expect(notificationMessage1).toHaveTextContent(dummyNotis[1].username);
      expect(notificationMessage2).toHaveTextContent(dummyNotis[2].username);
    });
  });
});
