import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name : 'React Js'
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler (e) {
    this.setState({
      name : e.target.value
    }) 
  }

  render () {
    return (
      <div>
        <UserOutput  
          name = { this.state.name } 
        />
        <UserInput 
          onChange = { this.onChangeHandler } 
        />
      </div>
    )
  }
}

export default App;
