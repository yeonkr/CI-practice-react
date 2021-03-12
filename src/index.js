import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { dummyTweets, dummyNotis } from './static/dummyData';

ReactDOM.render(
  <App dummyTweets={dummyTweets} dummyNotis={dummyNotis} />,
  document.getElementById('root')
);
