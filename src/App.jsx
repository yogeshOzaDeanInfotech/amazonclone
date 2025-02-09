import React from "react";
import Header from "./Header";

// class component is a statefull component
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      count : 0,
      name : "Batman"
    }
  }
  
  render(){
    return(
      <div>
        <Header  name = {this.state.name} />
        <h2>App component</h2>
        <h2>Count :{this.state.count} </h2>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>+</button>
        <br />
        <button onClick={()=> this.setState({name : "superman"})}>Change name</button>
      </div>
    )
  }
}

export default App;