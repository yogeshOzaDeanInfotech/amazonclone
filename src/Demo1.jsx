import React, { Component } from "react";

export default class Demo1 extends Component {

    constructor(props) {
      console.log("constructor method is called....")
        super(props);
        this.state = {
            count: 9,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
      console.log("getDerivedStateFromProps method is called.....")
      if(nextProps.count != prevState.count){
        return { count : nextProps.count * nextProps.count }
      }
      return null;
    }
    
    shouldComponentUpdate(nextProps, nextState){
      console.log("shouldComponentUpdate method is called.....")
      console.log(nextProps, nextState)
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate method is called .... ");
      console.log(prevProps , prevState)
      return prevProps; // Returns previous count
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(snapshot.count == 12){
        alert("you have won!!!!")
      }
      console.log("componentDidUpdate: Previous count was", snapshot);
    }

    render() {
      console.log("render method is called.....")
        return (
            <div>
                <h1>Demo Component</h1>
                <h2>Count : {this.state.count}</h2>
            </div>
        );
    }


    componentDidMount(){
      setTimeout(() => {
        console.log("component is mounted")
      },5000);
    }
}
