import React from "react";


// class component is a statefull component
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      count : 0,
      name : "superman"
    }
  }
  
  render(){
    return(
      <div>
        <h1>Welcome to Amazon Clone</h1>
        <h2>welcome :{this.state.name} </h2>
        <h2>welcome :{this.state.count} </h2>
        <button onClick={()=> this.setState({name : "spiderman", count : 20})}>Change</button>
      </div>
    )
  }
}

export default App;