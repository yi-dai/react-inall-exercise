import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './timer.less';

class Timer extends Component {
    state = {
        timeLeft:'Start',
        timerStart: false,
        interval:null,
        inputNumber:null,
    }

    updateTimer = () => {
        if(parseInt(this.state.timeLeft) > 0){
            this.setState({
              timeLeft:parseInt(this.state.timeLeft) - 1, 
            });
        } else {
            clearInterval(this.state.interval);
            this.setState({
                timeLeft:'End', 
                timerStart: false,
                interval:null,
              }); 
        }
    }
    
    timerStart = () => {
        if(this.state.inputNumber > 0){
            this.setState({
              timeLeft:this.state.inputNumber,
                timerStart: true,
                interval:setInterval(this.updateTimer, 1000),
            });
            
        }
    }
    

    render() {
      return (
        <div className="body">
          <h1 className="header">在线倒计时器</h1>
            <div className="timerRealize">
              <div className="setTimer">
                <div className="timerLine">
                  <label className="timerLable">设置时间</label>
                  <input type="timerInput" onChange={(event) => this.setState({inputNumber:event.target.value})}></input>
                </div>
                <input type="button" id="1" value="Start" className="startButton" onClick={this.timerStart} disabled={this.state.timerStart}/>
              </div>
              {this.state.timerStart ? <span className="timerRunning">{this.state.timeLeft} Seconds</span> : <span className="timerRunning">{this.state.timeLeft}</span>}
            </div>
          <Link  className="backToHome" to="/">回到主页</Link>
        </div> 
    )}
}

export default Timer;