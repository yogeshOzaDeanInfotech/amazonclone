import React, { Component } from 'react'

export default class Demo1 extends Component {

  componentWillUnmount(){
    console.log("componentWillUnmount method is callled....")
    alert("are you sure ??")
  }
  render() {
    return (
      <div>this is folder</div>
    )
  }
}
