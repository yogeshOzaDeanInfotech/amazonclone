import React, { Component } from 'react'
import Demo1 from './Demo1';
export default class App extends Component {

  constructor(){
    
    super();
    this.state = {
      count : 9,
    }
  }
  render() {
    
    return (
      <div>
        <Demo1  count={this.state.count}/>
        <hr /> 
        <h2>App Component</h2>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>+</button>
      </div>
    )
  }
}
