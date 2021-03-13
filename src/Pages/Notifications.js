import React from 'react';
import Footer from '../Footer';
import Notification from '../Components/Notification';
import './Notifications.css';

const Notifications = ({ dummyNotis }) => {
  return (
    <section className="notificationInfo" data-testid="NotificationInfo">
      <div className="notificationBar__container">
        <div className="notificationBar__wrapper">
          <div className="notificationBar__icon">
            <i className={'fas fa-calendar-check'}></i>
          </div>
          <div className="notificationBar__message">알림을 확인하세요.</div>
        </div>
      </div>

      <ul className="notifications">
        {dummyNotis.map((notification) => (
          <Notification content={notification.content} key={notification.id} />
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default Notifications;
