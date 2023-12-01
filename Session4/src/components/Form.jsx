import React, { Component } from 'react'

export default class Demo extends Component {
  constructor(){
    super()
    this.state={
        name:"",
        age:"",
    }
  }

  
  render() {
    return (
        <>
          <form action="">
            <label >Tên</label><br />
            <input type="text" name="name" id="" onChange={this.changeValue}/><br />
            <label >tuổi</label><br />
            <input type="text" name="name" id="" onChange={this.changeValue} /><br />
            <button>save</button>
          </form>

        </>
    )
  }
}
