import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Closed from './components/Closed';

console.log('REACT_APP_ALLOW_VOTING:', JSON.stringify(process.env.REACT_APP_ALLOW_VOTING, null, 2));

let app;
if ('true' === process.env.REACT_APP_ALLOW_VOTING) {
  app = <App />;
} else {
  app = <Closed />;
}

ReactDOM.render(app, document.querySelector('#root'));
