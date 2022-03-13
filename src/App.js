import React, { Component } from 'react'
import './App.css';
import Info from './props/Info';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      show: false
    }
  }
  

  
 showProfile = () => {
    this.setState ({
      show: !this.state.show
    }) 
 }


  render () {
  return (
    <div className="App">
      {this.state.show? <Info/> : null}
      <button onClick={() => this.showProfile()}>Show Profile</button>
    </div>
  );
  }
}

export default App;
