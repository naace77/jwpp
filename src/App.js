import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super()
    this.state={
      ...props,
      value1 : "",
      value2 : "",
      value3 : "",
      value4 : ""
    }
  }
  _onClicked=()=>{
    alert(`이러면 form Tag 도 필요없겠군 ㅎㅎ \n input1 = ${this.state.value1} input2 = ${this.state.value2} input3 = ${this.state.value3} input4 = ${this.state.value4}` )
  }
  render() {
    return (
      <div className="App">
        <h1>KJW HOMEPAGE </h1>
      </div>

    );
  }
}

export default App;
