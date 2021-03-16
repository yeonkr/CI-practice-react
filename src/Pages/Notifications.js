import React from 'react';
import './Notifications.css';
// TODO - import 구문을 이용하여 Notification과 Footer 컴포넌트를 불러오세요.

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
        {/* TODO
            1. Notification 컴포넌트를 이용하여 dummyNotis 에 담긴 트윗 정보를 모두 렌더링 할 수 있어야 합니다. 
            //! 아래처럼 알려줘도 될지 아니면 위와 같이 적어둘지 고민
            2. Notification 컴포넌트에 props는 content={notification.content} 의 형태로 넣습니다.
            3. Notification 컴포넌트에 key는 notification.id 의 형태로 넣습니다.
            */}
      </ul>
      {/* TODO - 이곳에 Footer 컴포넌트가 위치해야합니다. */}
    </section>
  );
};

export default Notifications;
