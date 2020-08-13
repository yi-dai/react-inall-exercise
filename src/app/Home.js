import React from 'react';
import './home.less';
import { Link } from "react-router-dom";
import calculatorPhoto from '../images/calculator.png';
import timerPhoto from '../images/timer.png';

const Home = () => {
  return (
  <div className="home">
    <div className="title">
      <div className="letters">
        <h1>在线实用工具</h1>
      </div>  
    </div>
    <div className="logo">
      <div className="cal">
        <img className="calculatorPhoto" src={calculatorPhoto} alt="calculatorPhoto" />
        <br />
        <Link className="calculatorLink" to="/calculator">计算器</Link>
      </div>
      <div className="ti">
        <img className="timerPhoto" src={timerPhoto} alt="timerPhoto" />
        <br />
        <Link className="timerLink" to="/timer">倒计时器</Link>
      </div>
      
    </div>
  </div>
  );
};

export default Home;