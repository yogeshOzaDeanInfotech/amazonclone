import React, { Component } from 'react'
import Demo1 from './Demo1';
export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }


  render() {
    return (
      <div>
        <Demo1 count={this.state.count}/>
        <hr /> 
        <h2>App Component</h2>
        <button>Remove</button>
      </div>
    )
  }
}
