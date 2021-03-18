import React from 'react';
import './Notifications.css';
// TODO - import문을 이용하여 Notification 컴포넌트와 Footer 컴포넌트를 불러오세요.

const Notifications = ({ dummyNotis }) => {
  return (
    <section className="notificationInfo">
      <div className="notificationBar__container">
        <div className="notificationBar__wrapper">
          <div className="notificationBar__icon">
            <i className={'fas fa-calendar-check'}></i>
          </div>
          <div className="notificationBar__message">알림을 확인하세요.</div>
        </div>
      </div>
      <ul className="notifications">
        {/* TODO - Notification 컴포넌트를 이용하여 dummyTweets에 담긴 트윗을 모두 보여줘야 합니다. */}
      </ul>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
    </section>
  );
};

export default Notifications;
