/* eslint react/prop-types: 0 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';
// import {Router, browserHistory} from 'react-router';
import App from './app';

ReactDOM.render(<App />, document.getElementById('reactapp-root'));
// render(<Router history={browserHistory} routes={App} />, document.getElementById('reactapp-root'));