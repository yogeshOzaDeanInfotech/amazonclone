import React, { Component } from "react";


export default class Demo1 extends Component {

  // method 1
    constructor(props) {
      console.log("constructor method is called....")
        super(props);
        this.state = {
            count: 9,
        };
    }
    // method  2
    static getDerivedStateFromProps(nextProps, prevState){
      console.log("getDerivedStateFromProps method is called.....")
      console.log({nextProps});
      console.log({prevState});
      if(nextProps.count != prevState.count){
      return { count : nextProps.count * nextProps.count }
      }
      return null;
    }
   
    //method  3  render
    render() {
      console.log("render method is called.....")
        return (
            <div>
                <h1>Demo Component</h1>
                <h2>Count : {this.state.count}</h2>
            </div>
        );
    }

    // method 4
    componentDidMount(){
      console.log(" componentDidMount method is called....")
      setTimeout(() => {
        console.log("component is mounted")
      },5000);
    }
}
