'user strict';
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import * as Home from './component/home';
import * as Address from './component/address';

const AppNowDeprecated = () => <h1>Hello World!</h1>;

class App extends Component {
    render() {
        return (
            <h1>Hello Rana Das!</h1>
        );
    }
}


export default App;
/*


 class App extends Component {
 render() {
 return (
 <Router history={hashHistory}>
 <Route path='/' component={Home} />
 <Route path='/address' component={Address} />
 </Router>
 )
 }
 }

 */