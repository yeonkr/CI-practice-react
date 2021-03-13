import React from 'react';
import './Notification.css';

const Notification = ({ content }) => {
  return (
    <li className="notification">
      <div className="notification__sign">
        <i className={'fas fa-caret-right'}></i>
      </div>
      <div className="notification__content">
        <span className="notification__message">{content}</span>
      </div>
    </li>
  );
};

export default Notification;
