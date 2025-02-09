import React, { Component } from 'react'
import Demo1 from './Demo1';
export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      isDelete : false
    }
  }


  render() {
    return (
      <div>
        {this.state.isDelete ? null : <Demo1/>}
        <hr /> 
        <h2>App Component</h2>
        <button onClick={()=> this.setState({isDelete : true})}>Remove</button>
      </div>
    )
  }



}
