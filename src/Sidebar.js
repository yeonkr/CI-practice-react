import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="sidebar" data-testid="sidebar">
      <Link to="/" data-testid="sidebarFeatures">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/notification" data-testid="sidebarNotifications">
        <i className="far fa-bell"></i>
      </Link>
      <Link to="/mypage" data-testid="sidebarMypage">
        <i className="far fa-user"></i>
      </Link>
    </section>
  );
};

export default Sidebar;
