import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './calculator.less';

class Calculator extends Component {
    state={
        number1:'',
        operator:'',
        number2:'',
        result:'',
    }
    handlePrint = () => {
        if(!this.state.result){
            return `${this.state.number1} ${this.state.operator} ${this.state.number2}`
        } else {
            return `${this.state.result}`
        }
    }

    handleNumber = (event) => {
        if(!this.state.operator){
            this.setState({
                number1: this.state.number1 + event.target.value,
            });
        } else {
            this.setState({
                number2: this.state.number2 + event.target.value,
            });
        }
    }
    handleOperator = (event) => {
        if(!this.state.operator){
            this.setState({
                operator: event.target.value,
            });
        } 
    }
    handleClear = (event) => {
        this.setState({
            number1:'',
            operator:'',
            number2:'',
            result:'',
        });
    }

    handleResult = () => {
        let result;
        if(this.state.operator === "+"){
            result = parseInt(this.state.number1) + parseInt(this.state.number2);
        } else if(this.state.operator === "-"){
            result = parseInt(this.state.number1) - parseInt(this.state.number2);
        } else if(this.state.operator === "*"){
            result = parseInt(this.state.number1) * parseInt(this.state.number2);
        }
        this.setState({
            result:result,
        });
    }

    render() {
        let inputValue = this.handlePrint();
        return (
            <div className="body">
                <h1 className="header">在线计算器</h1>
                <div className="calcaulatorRealize">
                    <div class="line">
                        <input type="text" value={inputValue} className="inputFrame" onChange={this.handlePrint} />
                        <br />
                        <input type="button" id="10" value="*" className="operator" onClick={this.handleOperator} />
                        <input type="button" id="11" value="-" className="operator" onClick={this.handleOperator} />
                        <input type="button" id="12" value="+" className="operator" onClick={this.handleOperator} />
                      
                        <input type="button" id="9" value="9" className="number" onClick={this.handleNumber} />
                        <input type="button" id="8" value="8" className="number" onClick={this.handleNumber} />
                        <input type="button" id="7" value="7" className="number" onClick={this.handleNumber} />
                      
                        <input type="button" id="6" value="6" className="number" onClick={this.handleNumber} />
                        <input type="button" id="5" value="5" className="number" onClick={this.handleNumber} />
                        <input type="button" id="4" value="4" className="number" onClick={this.handleNumber} />
                    
                        <input type="button" id="3" value="3" className="number" onClick={this.handleNumber} />
                        <input type="button" id="2" value="2" className="number" onClick={this.handleNumber} />
                        <input type="button" id="1" value="1" className="number" onClick={this.handleNumber} />
                    
                        <input type="button" id="14" value="=" className="equal" onClick={this.handleResult} />
                        <input type="button" id="13" value="clear" className="clear" onClick={this.handleClear} />
                        <input type="button" id="0" value="0" className="number" onClick={this.handleNumber} />
                    </div>
                </div>
                <Link className="backToHome" to="/">回到主页</Link>
            </div>
            
        )
    }
}

export default Calculator;