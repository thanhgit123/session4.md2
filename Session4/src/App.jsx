import React, { Component } from 'react'
import Demo from './components/Form'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0,
    }
  };


  componentDidMount=()=>{
    console.log("componet sau render lan dau");
  }
 
  componentWillUnmount=()=>{
    console.log("componentWillMount bắt đâuù chạy");
  }
  render() {
    console.log("component render lan dau");
    return (
      <>
        <Demo></Demo>

      </>
    )
  }
}
