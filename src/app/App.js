import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from './Calculator';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="links">
            <Link to="/" style={{marginRight:'40px'}}>HOME</Link>
            <Link to="/calculator" style={{marginRight:'40px'}}>在线计算器</Link>
            <Link to="/timer" style={{marginRight:'70px'}}>在线倒计时器</Link>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/calculator' component={Calculator} />
          <Route path='/timer' component={Timer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
