import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
